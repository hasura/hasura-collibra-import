const output = [
  {
    resourceType: "Community",
    identifier: {
      name: "DBs Community",
    },
  },
  {
    resourceType: "Domain",
    identifier: {
      name: "Physical Domain",
      community: {
        name: "DBs Community",
      },
    },
    type: {
      name: "Physical Data Dictionary",
    },
  },
  {
    resourceType: "Asset",
    identifier: {
      name: "SCHEMA_1",
      domain: {
        name: "Physical Domain",
        community: {
          name: "DBs Community",
        },
      },
    },
    type: {
      name: "Schema",
    },
  },
  {
    resourceType: "Asset",
    identifier: {
      name: "TABLE_1",
      domain: {
        name: "Physical Domain",
        community: {
          name: "DBs Community",
        },
      },
    },
    type: {
      name: "Table",
    },
    relations: {
      "00000000-0000-0000-0000-000000007043:SOURCE": [
        {
          name: "SCHEMA_1",
          domain: {
            name: "Physical Domain",
            community: {
              name: "DBs Community",
            },
          },
        },
      ],
    },
  },
  {
    resourceType: "Asset",
    identifier: {
      name: "TABLE_2",
      domain: {
        name: "Physical Domain",
        community: {
          name: "DBs Community",
        },
      },
    },
    type: {
      name: "Table",
    },
    relations: {
      "00000000-0000-0000-0000-000000007043:SOURCE": [
        {
          name: "SCHEMA_1",
          domain: {
            name: "Physical Domain",
            community: {
              name: "DBs Community",
            },
          },
        },
      ],
    },
  },
  {
    resourceType: "Asset",
    identifier: {
      name: "TAB_1_COLUMN_1",
      domain: {
        name: "Physical Domain",
        community: {
          name: "DBs Community",
        },
      },
    },
    type: {
      name: "Column",
    },
    relations: {
      "00000000-0000-0000-0000-000000007042:TARGET": [
        {
          name: "TABLE_1",
          domain: {
            name: "Physical Domain",
            community: {
              name: "DBs Community",
            },
          },
        },
      ],
    },
  },
  {
    resourceType: "Asset",
    identifier: {
      name: "TAB_1_COLUMN_2",
      domain: {
        name: "Physical Domain",
        community: {
          name: "DBs Community",
        },
      },
    },
    type: {
      name: "Column",
    },
    relations: {
      "00000000-0000-0000-0000-000000007042:TARGET": [
        {
          name: "TABLE_1",
          domain: {
            name: "Physical Domain",
            community: {
              name: "DBs Community",
            },
          },
        },
      ],
    },
  },
  {
    resourceType: "Asset",
    identifier: {
      name: "TAB_2_COLUMN_1",
      domain: {
        name: "Physical Domain",
        community: {
          name: "DBs Community",
        },
      },
    },
    type: {
      name: "Column",
    },
    relations: {
      "00000000-0000-0000-0000-000000007042:TARGET": [
        {
          name: "TABLE_2",
          domain: {
            name: "Physical Domain",
            community: {
              name: "DBs Community",
            },
          },
        },
      ],
    },
  },
];
