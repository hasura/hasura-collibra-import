const uuid = require("uuid");
const process = require("process");

const COMMUNITY_NAME = "Hasura Community";
const DOMAIN_NAME = "Hasura Domain";

const DOMAIN_SPEC = {
  domain: {
    name: DOMAIN_NAME,
    community: {
      name: COMMUNITY_NAME,
    },
  },
};

const metadataFile = process.argv[2];

if (!metadataFile) {
  console.log("Usage: node convert.js <metadata-file>");
}
console.log("Using metadata file: ", metadataFile);

// PARSE METADATA

function parseMetadata() {
  const metadata = require(metadataFile);

  const source = metadata.metadata.sources[0].tables;

  const tables = []; // string[]
  const rels = []; // (name, source, target, id)[]

  function tableName(t) {
    return t.schema + "_" + t.name;
  }

  source.forEach((t) => {
    const tn = tableName(t.table);
    tables.push(tn);
    [
      ...(t.object_relationships || []),
      ...(t.array_relationships || []),
    ].forEach((r) => {
      const m = r.using.manual_configuration;
      if (m) {
        rels.push([r.name, tn, tableName(m.remote_table), uuid.v4()]);
      }
    });
  });

  return { tables, rels };
}

// COLLIBRA TEMPLATES

function tableCommand(tableName, rels) {
  const j = {
    resourceType: "Asset",
    identifier: {
      name: tableName,
      ...DOMAIN_SPEC,
    },
    type: {
      name: "Table",
    },
  };

  var rs = {};

  rels.filter((r) => {
    if (r[1] === tableName) {
      rs[r[3] + ":SOURCE"] = [{ name: r[2], ...DOMAIN_SPEC }];
    } else if (r[2] === tableName) {
      rs[r[3] + ":TARGET"] = [{ name: r[1], ...DOMAIN_SPEC }];
    }
  });

  if (Object.keys(rs).length > 0) {
    j.relations = rs;
  }

  return j;
}

function baseCommands() {
  return [
    {
      resourceType: "Community",
      identifier: {
        name: COMMUNITY_NAME,
      },
    },
    {
      resourceType: "Domain",
      identifier: {
        name: DOMAIN_NAME,
        community: {
          name: COMMUNITY_NAME,
        },
      },
      type: {
        name: "Physical Data Dictionary",
      },
    },
    {
      resourceType: "Asset",
      identifier: {
        name: "SCHEMA",
        ...DOMAIN_SPEC,
      },
      type: {
        name: "Schema",
      },
    },
  ];
}

function convert() {
  const { tables, rels } = parseMetadata();
  const commands = baseCommands();
  tables.forEach((t) => {
    commands.push(tableCommand(t, rels));
  });
  return commands;
}

console.log(JSON.stringify(convert(), null, 2));
