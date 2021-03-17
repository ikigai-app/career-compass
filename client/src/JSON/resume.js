export const resume = {
  Info: {
    Code: "Success",
    Message: "Successful transaction",
    TransactionId: "edfb65fe-1bb3-4a91-9bee-49c61aa5f26a",
    EngineVersion: "9.5.2.0",
    ApiVersion: "10.0.0.0",
    TotalElapsedMilliseconds: 1312,
    CustomerDetails: {
      AccountId: "13430659",
      Name: "Sovren Web Demo",
      IPAddress: "52.31.11.178",
      Region: "eu-west-1",
      CreditsRemaining: 199540768.22,
      CreditsUsed: 459232,
      ExpirationDate: "2027-03-10",
      MaximumConcurrentRequests: 10,
    },
  },
  Value: {
    ParsingResponse: {
      Code: "Success",
      Message: "Successful transaction",
    },
    ResumeData: {
      ContactInformation: {
        CandidateName: {
          FormattedName: "Sreenivasan AC",
          GivenName: "Sreenivasan",
          FamilyName: "AC",
        },
        Telephones: [
          {
            Raw: "404-663-9270",
            Normalized: "+1 404-663-9270",
            InternationalCountryCode: "1",
            AreaCityCode: "404",
            SubscriberNumber: "663-9270",
          },
        ],
        EmailAddresses: ["sreenivasan.nitt@gmail.com"],
        WebAddresses: [
          {
            Address: "https://www.linkedin.com/in/sreenivasan-ac",
            Type: "LinkedIn",
          },
        ],
      },
      Education: {
        HighestDegree: {
          Name: {
            Raw: "Masters of Science in Computer Science",
            Normalized: "masters",
          },
          Type: "masters",
        },
        EducationDetails: [
          {
            Id: "DEG-1",
            Text:
              "Georgia Institute of Technology\tAtlanta, Georgia, USA\n• Masters of Science in Computer Science;\tAug. 2017 - May. 2019\nSpecialization in Machine Learning",
            SchoolName: {
              Raw: "Georgia Institute of Technology",
              Normalized: "Georgia Institute of Technology",
            },
            SchoolType: "university",
            Location: {
              CountryCode: "US",
              Regions: ["Georgia"],
              Municipality: "Atlanta",
            },
            Degree: {
              Name: {
                Raw: "Masters of Science in Computer Science",
                Normalized: "masters",
              },
              Type: "masters",
            },
            Majors: ["Machine Learning"],
            LastEducationDate: {
              Date: "2019-05-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
          },
          {
            Id: "DEG-2",
            Text:
              "National Institute of Technology\tTiruchirapalli, India\n• Bachelors of Technology in Computer Science and Engineering\tAug. 2010 - June. 2014",
            SchoolName: {
              Raw: "National Institute of Technology",
              Normalized: "National Institute of Technology",
            },
            SchoolType: "university",
            Location: {
              CountryCode: "IN",
              Municipality: "Tiruchirapalli",
            },
            Degree: {
              Name: {
                Raw:
                  "Bachelors of Technology in Computer Science and Engineering",
                Normalized: "bachelors",
              },
              Type: "bachelors",
            },
            Majors: ["Computer Science and Engineering"],
            LastEducationDate: {
              Date: "2014-06-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
          },
        ],
      },
      EmploymentHistory: {
        ExperienceSummary: {
          Description:
            "Sreenivasan AC's experience appears to be mostly concentrated in Information Technology (mostly Programming) and slightly concentrated in Sales (mostly General). Sreenivasan AC's experience appears to be lower-to-mid level, with about 4 years of experience.",
          MonthsOfWorkExperience: 49,
          MonthsOfManagementExperience: 0,
          ExecutiveType: "NONE",
          AverageMonthsPerEmployer: 12,
          FulltimeDirectHirePredictiveIndex: 40,
          ManagementStory: "",
          CurrentManagementLevel: "",
          ManagementScore: 0,
        },
        Positions: [
          {
            Id: "POS-1",
            Employer: {
              Name: {
                Probability: "Confident",
                Raw: "Georgia Institute of Technology",
                Normalized: "Georgia Institute of Technology",
              },
              Location: {
                CountryCode: "US",
                Regions: ["Georgia"],
                Municipality: "Atlanta",
              },
            },
            RelatedToByCompanyName: ["POS-2"],
            IsSelfEmployed: false,
            IsCurrent: false,
            JobTitle: {
              Raw: "Graduate Teaching Assistant",
              Normalized: "Graduate Teaching Assistant",
              Probability: "Confident",
            },
            StartDate: {
              Date: "2019-01-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            EndDate: {
              Date: "2019-04-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            JobType: "directHire",
            TaxonomyName: "Information Technology",
            SubTaxonomyName: "Machine Learning",
            JobLevel: "Experienced (non-manager)",
            TaxonomyPercentage: 100,
            Description:
              "Deep Learning CS7643: Assisted Professor Zsolt Kira in conducting the course Deep Learning",
          },
          {
            Id: "POS-2",
            Employer: {
              Name: {
                Probability: "Confident",
                Raw: "Georgia Institute of Technology",
                Normalized: "Georgia Institute of Technology",
              },
              Location: {
                CountryCode: "US",
                Regions: ["Georgia"],
                Municipality: "Atlanta",
              },
            },
            RelatedToByCompanyName: ["POS-1"],
            IsSelfEmployed: false,
            IsCurrent: false,
            JobTitle: {
              Raw: "Graduate Research Assistant",
              Normalized: "Graduate Research Assistant",
              Probability: "Confident",
            },
            StartDate: {
              Date: "2018-08-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            EndDate: {
              Date: "2018-12-31",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            JobType: "directHire",
            TaxonomyName: "Engineering",
            SubTaxonomyName: "Robotics and Automation",
            JobLevel: "Experienced (non-manager)",
            TaxonomyPercentage: 100,
            Description:
              "Worked on Research project under Professor James Tsai Transportation Lab - Evaluation of Object detection of Tra c infrastructure using Registration and Fusion of 2D Camera and 3D LIDAR Point cloud Data.",
          },
          {
            Id: "POS-3",
            Employer: {
              Name: {
                Probability: "Confident",
                Raw: "Invento Robotics",
                Normalized: "Invento Robotics",
              },
              Location: {
                CountryCode: "IN",
                Municipality: "Bangalore",
              },
            },
            IsSelfEmployed: false,
            IsCurrent: false,
            JobTitle: {
              Raw: "AI Application Developer for Humanoid Robot Company",
              Normalized: "AI Application Developer for Humanoid Robot Company",
              Probability: "Confident",
              Variations: ["AI Application Developer"],
            },
            StartDate: {
              Date: "2018-04-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            EndDate: {
              Date: "2018-07-31",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            JobType: "directHire",
            TaxonomyName: "Engineering",
            SubTaxonomyName: "Robotics and Automation",
            JobLevel: "Experienced (non-manager)",
            TaxonomyPercentage: 60,
            Description:
              "O✏ine Conversation: Developed O✏ine Natural Language Understanding and Conversation Capability for a\nHumanoid Robot Mitra to understand context and Respond to users. Developed using RASA framework\n(Entity-Intent based). Setup the above as Alexa Skills for Guest registration and Movie recommendation using\nLambda Function. Developed web interface for testing Speech Conversation flows.\nEarly-stage growing Robotics AI Startup experience: worked directly under CEO Mr.Balaji Vishwanathan",
          },
          {
            Id: "POS-4",
            Employer: {
              Name: {
                Probability: "Confident",
                Raw: "Groupon",
                Normalized: "Groupon",
              },
              Location: {
                CountryCode: "US",
                Regions: ["CA"],
                Municipality: "Palo Alto",
              },
            },
            RelatedToByCompanyName: ["POS-5"],
            IsSelfEmployed: false,
            IsCurrent: false,
            JobTitle: {
              Raw: "#1 followed Top-writer",
              Normalized: "1 followed Top writer",
              Probability: "Confident",
              Variations: ["Top-writer"],
            },
            StartDate: {
              Date: "2016-04-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            EndDate: {
              Date: "2017-06-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            JobType: "directHire",
            TaxonomyName: "Information Technology",
            SubTaxonomyName: "Mobile Applications",
            JobLevel: "Experienced (non-manager)",
            TaxonomyPercentage: 57,
            Description:
              "(1.2 years)\n\nMerchant Tools: Co-owner to develop a mobile-friendly web-application in AngularJS for creating Card Linked\nO↵ers used by 1500+ Sales Representatives and Merchants to create Groupon Deals.\nAPI Services: Owner for managing Contract Service and Fine Print API service. Automated the manual\nContract-signing process by integrating with DocuSign API, saving Groupon atleast $40,000 per month.\nTransitioned the FinePrint Service workflow from reading from static Google Spreadsheet to consume from upstream services dynamically through API integrations.\nSelf Service workflows: Implemented features and updates like Redemption Window, Blackout Dates, Fine\nPrints, Groupon Delivery and Takeout to support Merchant Self-service to create various Deal types and workflows.\n\nDeployments: Point of contact for Deployments for di↵erent Merchant Tools and services like Fine Print Service,\nContract Service, Self-service Backend Service, etc. Created Splunk dashboards for visualisation and Nagios alerts when metrics exceed thresholds.",
          },
          {
            Id: "POS-5",
            Employer: {
              Name: {
                Probability: "Confident",
                Raw: "Groupon",
                Normalized: "Groupon",
              },
              Location: {
                CountryCode: "IN",
                Municipality: "Chennai",
              },
            },
            RelatedToByCompanyName: ["POS-4"],
            IsSelfEmployed: false,
            IsCurrent: false,
            JobTitle: {
              Raw: "Software Development Engineer (Full Stack Developer)",
              Normalized: "Software Development Engineer Full Stack Developer",
              Probability: "Confident",
              Variations: [
                "Software Development Engineer",
                "(Full Stack Developer)",
                "Full Stack Developer",
              ],
            },
            StartDate: {
              Date: "2014-06-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            EndDate: {
              Date: "2016-04-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            JobType: "directHire",
            TaxonomyName: "Information Technology",
            SubTaxonomyName: "Big Data",
            JobLevel: "Experienced (non-manager)",
            TaxonomyPercentage: 25,
            Description:
              "Deal Creation Tool: Worked on Product features for the Deal Creation Tool used by Sales representatives to create di↵erent kinds of Deals. Transferred to Groupon, Palo Alto, California based on consistent performance.\nImage Asset Management: Developed features like Keyword Metadata management, Internationalization,\nAttribution for the Image Asset Management Tool used for managing Images used at Groupon.\nTDD Automated Testing: Followed TDD Automated Testing with Karma, Jasmine, Mocha.",
          },
          {
            Id: "POS-6",
            Employer: {
              Name: {
                Probability: "Confident",
                Raw: "Defence Avionics Research Establishment",
                Normalized: "Defence Avionics Research Establishment",
              },
              Location: {
                CountryCode: "IN",
                Municipality: "Bangalore",
              },
            },
            IsSelfEmployed: false,
            IsCurrent: false,
            JobTitle: {
              Raw: "Intern",
              Normalized: "Intern",
              Probability: "Confident",
            },
            StartDate: {
              Date: "2012-05-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            EndDate: {
              Date: "2012-06-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            JobType: "internship",
            TaxonomyName: "Information Technology",
            SubTaxonomyName: "Privacy and Data Security",
            JobLevel: "Entry Level",
            TaxonomyPercentage: 100,
            Description:
              "Security Testing and Analysis: Analysed Network security against attacks at Defence Organisation in their\ninternal networks and websites for vulnerabilities like SQL Injection, XSS Scripting, DDOS attack, and submitted a\nreport recommending 2 fixes.",
          },
        ],
      },
      SkillsData: [
        {
          Root: "Sovren",
          Taxonomies: [
            {
              Id: "10",
              Name: "Information Technology",
              PercentOfOverall: 57,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "204",
                  SubTaxonomyName: "Programming",
                  PercentOfOverall: 25,
                  PercentOfParent: 45,
                  Skills: [
                    {
                      Id: "021194",
                      Name: "API",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 14,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                    {
                      Id: "012275",
                      Name: "C#",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "012287",
                      Name: "C++",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "018787",
                      Name: "HCI",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "025394",
                      Name: "JAVASCRIPT",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                      Variations: [
                        {
                          Id: "3391101",
                          Name: "BOOTSTRAP",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                    {
                      Id: "021679",
                      Name: "METADATA",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-5",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 22,
                      },
                      LastUsed: {
                        Value: "2016-04-01",
                      },
                    },
                    {
                      Id: "003276",
                      Name: "NATURAL",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-3",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 4,
                      },
                      LastUsed: {
                        Value: "2018-07-31",
                      },
                    },
                    {
                      Id: "006120",
                      Name: "PYTHON",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                      Variations: [
                        {
                          Id: "3391121",
                          Name: "FLASK",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                          ],
                          ExistsInText: true,
                        },
                        {
                          Id: "3391120",
                          Name: "MATPLOTLIB",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                          ],
                          ExistsInText: true,
                        },
                        {
                          Id: "3391118",
                          Name: "NUMPY",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                    {
                      Id: "1004736",
                      Name: "Ruby",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                      Variations: [
                        {
                          Id: "100473602",
                          Name: "Rails",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                    {
                      Id: "024873",
                      Name: "SCRIPTING",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-6",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 1,
                      },
                      LastUsed: {
                        Value: "2012-06-01",
                      },
                    },
                    {
                      Id: "022594",
                      Name: "STRUCTURED SOFTWARE",
                      ExistsInText: false,
                      Variations: [
                        {
                          Id: "008213",
                          Name: "SOFTWARE DEVELOPMENT",
                          FoundIn: [
                            {
                              SectionType: "WORK HISTORY",
                              Id: "POS-4",
                            },
                            {
                              SectionType: "WORK HISTORY",
                              Id: "POS-5",
                            },
                          ],
                          ExistsInText: true,
                          MonthsExperience: {
                            Value: 36,
                          },
                          LastUsed: {
                            Value: "2017-06-01",
                          },
                        },
                      ],
                      MonthsExperience: {
                        Value: 36,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                      ChildrenMonthsExperience: {
                        Value: 36,
                      },
                      ChildrenLastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "720",
                  SubTaxonomyName: "Machine Learning",
                  PercentOfOverall: 10,
                  PercentOfParent: 17,
                  Skills: [
                    {
                      Id: "7200018",
                      Name: "DEEP LEARNING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-1",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 3,
                      },
                      LastUsed: {
                        Value: "2019-04-01",
                      },
                    },
                    {
                      Id: "7200019",
                      Name: "DIMENSIONALITY REDUCTION",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "7200030",
                      Name: "INDEPENDENT COMPONENT ANALYSIS",
                      ExistsInText: false,
                      Variations: [
                        {
                          Id: "7200031",
                          Name: "ICA",
                          FoundIn: [
                            {
                              SectionType: "PROJECT_HEADERS",
                            },
                            {
                              SectionType: "WORK HISTORY",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                    {
                      Id: "7200034",
                      Name: "K-MEANS",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "7200149",
                      Name: "MACHINE LEARNING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "EDUCATION",
                          Id: "DEG-1",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 21,
                      },
                      LastUsed: {
                        Value: "2019-05-01",
                      },
                    },
                    {
                      Id: "7200042",
                      Name: "NEURAL NETWORKS",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "7200049",
                      Name: "PRINCIPAL COMPONENT ANALYSIS",
                      ExistsInText: false,
                      Variations: [
                        {
                          Id: "7200050",
                          Name: "PCA",
                          FoundIn: [
                            {
                              SectionType: "PROJECT_HEADERS",
                            },
                            {
                              SectionType: "WORK HISTORY",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                    {
                      Id: "7200131",
                      Name: "Q-LEARNING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "7200054",
                      Name: "REINFORCEMENT LEARNING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "553",
                  SubTaxonomyName: "Big Data",
                  PercentOfOverall: 6,
                  PercentOfParent: 11,
                  Skills: [
                    {
                      Id: "5530905",
                      Name: "ARTIFICIAL INTELLIGENCE",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "5530921",
                      Name: "CLUSTERING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "5531016",
                      Name: "MACHINE LEARNING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "EDUCATION",
                          Id: "DEG-1",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 21,
                      },
                      LastUsed: {
                        Value: "2019-05-01",
                      },
                    },
                    {
                      Id: "5531026",
                      Name: "METADATA",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-5",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 22,
                      },
                      LastUsed: {
                        Value: "2016-04-01",
                      },
                    },
                    {
                      Id: "5530805",
                      Name: "MONGODB",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "5530851",
                      Name: "SPLUNK",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 14,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "349",
                  SubTaxonomyName:
                    "Operations, Monitoring and Software Management",
                  PercentOfOverall: 4,
                  PercentOfParent: 8,
                  Skills: [
                    {
                      Id: "3490022",
                      Name: "CLUSTERING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "003261",
                      Name: "NAGIOS",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 14,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                    {
                      Id: "3490025",
                      Name: "NETWORK SECURITY",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-6",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 1,
                      },
                      LastUsed: {
                        Value: "2012-06-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "552",
                  SubTaxonomyName: "Mobile Applications",
                  PercentOfOverall: 4,
                  PercentOfParent: 7,
                  Skills: [
                    {
                      Id: "5520505",
                      Name: "ANGULARJS",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 14,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                    {
                      Id: "5520522",
                      Name: "BOOTSTRAP",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "556",
                  SubTaxonomyName: "Privacy and Data Security",
                  PercentOfOverall: 3,
                  PercentOfParent: 4,
                  Skills: [
                    {
                      Id: "5551284",
                      Name: "DDOS",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-6",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 1,
                      },
                      LastUsed: {
                        Value: "2012-06-01",
                      },
                    },
                    {
                      Id: "5551270",
                      Name: "SPLUNK",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 14,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "338",
                  SubTaxonomyName: "Security",
                  PercentOfOverall: 2,
                  PercentOfParent: 4,
                  Skills: [
                    {
                      Id: "3380002",
                      Name: "MACHINE LEARNING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "EDUCATION",
                          Id: "DEG-1",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 21,
                      },
                      LastUsed: {
                        Value: "2019-05-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "193",
                  SubTaxonomyName: "Database",
                  PercentOfOverall: 1,
                  PercentOfParent: 2,
                  Skills: [
                    {
                      Id: "026777",
                      Name: "DATABASE MODELING",
                      ExistsInText: false,
                      Variations: [
                        {
                          Id: "022486",
                          Name: "DATABASE",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                    {
                      Id: "003243",
                      Name: "MYSQL",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "008481",
                      Name: "SQL",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-6",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 1,
                      },
                      LastUsed: {
                        Value: "2012-06-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "196",
                  SubTaxonomyName: "Internet",
                  PercentOfOverall: 1,
                  PercentOfParent: 1,
                  Skills: [
                    {
                      Id: "022110",
                      Name: "SECURITY",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-6",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 1,
                      },
                      LastUsed: {
                        Value: "2012-06-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "718",
                  SubTaxonomyName: "Distributed Systems",
                  PercentOfOverall: 0,
                  PercentOfParent: 1,
                  Skills: [
                    {
                      Id: "7180010",
                      Name: "REST",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "550",
                  SubTaxonomyName: "Cloud Computing",
                  PercentOfOverall: 0,
                  PercentOfParent: 0,
                  Skills: [
                    {
                      Id: "5500361",
                      Name: "MONGODB",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "192",
                  SubTaxonomyName: "Data Mining",
                  PercentOfOverall: 0,
                  PercentOfParent: 0,
                  Skills: [
                    {
                      Id: "003449",
                      Name: "ARTIFICIAL INTELLIGENCE",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "555",
                  SubTaxonomyName: "Enterprise Storage",
                  PercentOfOverall: 0,
                  PercentOfParent: 0,
                  Skills: [
                    {
                      Id: "5551333",
                      Name: "CLUSTERING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "198",
                  SubTaxonomyName: "Network",
                  PercentOfOverall: 0,
                  PercentOfParent: 0,
                  Skills: [
                    {
                      Id: "013564",
                      Name: "CLUSTERING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "253",
                  SubTaxonomyName: "Protocols and Standards",
                  PercentOfOverall: 0,
                  PercentOfParent: 0,
                  Skills: [
                    {
                      Id: "019131",
                      Name: "HUMAN COMPUTER INTERACTION",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
              ],
            },
            {
              Id: "20",
              Name: "Sales",
              PercentOfOverall: 12,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "105",
                  SubTaxonomyName: "General",
                  PercentOfOverall: 12,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "030814",
                      Name: "SALES REPRESENTATIVES",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-5",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 36,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                  ],
                },
              ],
            },
            {
              Id: "5",
              Name: "Engineering",
              PercentOfOverall: 11,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "735",
                  SubTaxonomyName: "Robotics and Automation",
                  PercentOfOverall: 6,
                  PercentOfParent: 58,
                  Skills: [
                    {
                      Id: "014117",
                      Name: "COMPUTER VISION",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "555121648",
                      Name: "ROBOTICS",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-3",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 4,
                      },
                      LastUsed: {
                        Value: "2018-07-31",
                      },
                    },
                    {
                      Id: "555121667",
                      Name: "SENSORS",
                      ExistsInText: false,
                      Variations: [
                        {
                          Id: "555121669",
                          Name: "LIDAR",
                          FoundIn: [
                            {
                              SectionType: "WORK HISTORY",
                              Id: "POS-2",
                            },
                          ],
                          ExistsInText: true,
                          MonthsExperience: {
                            Value: 5,
                          },
                          LastUsed: {
                            Value: "2018-12-31",
                          },
                        },
                      ],
                      MonthsExperience: {
                        Value: 5,
                      },
                      LastUsed: {
                        Value: "2018-12-31",
                      },
                      ChildrenMonthsExperience: {
                        Value: 5,
                      },
                      ChildrenLastUsed: {
                        Value: "2018-12-31",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "137",
                  SubTaxonomyName: "Industrial",
                  PercentOfOverall: 1,
                  PercentOfParent: 11,
                  Skills: [
                    {
                      Id: "080867",
                      Name: "ROBOT",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-3",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 4,
                      },
                      LastUsed: {
                        Value: "2018-07-31",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "297",
                  SubTaxonomyName: "Transportation",
                  PercentOfOverall: 1,
                  PercentOfParent: 11,
                  Skills: [
                    {
                      Id: "080559",
                      Name: "ROBOT",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-3",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 4,
                      },
                      LastUsed: {
                        Value: "2018-07-31",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "307",
                  SubTaxonomyName: "General Engineering",
                  PercentOfOverall: 1,
                  PercentOfParent: 11,
                  Skills: [
                    {
                      Id: "080522",
                      Name: "FANUC",
                      ExistsInText: false,
                      Variations: [
                        {
                          Id: "007187",
                          Name: "ROBOTICS",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                            {
                              SectionType: "WORK HISTORY",
                              Id: "POS-3",
                            },
                          ],
                          ExistsInText: true,
                          MonthsExperience: {
                            Value: 4,
                          },
                          LastUsed: {
                            Value: "2018-07-31",
                          },
                        },
                      ],
                      MonthsExperience: {
                        Value: 4,
                      },
                      LastUsed: {
                        Value: "2018-07-31",
                      },
                      ChildrenMonthsExperience: {
                        Value: 4,
                      },
                      ChildrenLastUsed: {
                        Value: "2018-07-31",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "311",
                  SubTaxonomyName: "Air and Aerospace",
                  PercentOfOverall: 1,
                  PercentOfParent: 5,
                  Skills: [
                    {
                      Id: "080268",
                      Name: "AVIONICS",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "080260",
                      Name: "SIMULATOR",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "144",
                  SubTaxonomyName: "Computer Hardware",
                  PercentOfOverall: 0,
                  PercentOfParent: 2,
                  Skills: [
                    {
                      Id: "080790",
                      Name: "AVIONICS",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "298",
                  SubTaxonomyName: "Surveying",
                  PercentOfOverall: 0,
                  PercentOfParent: 2,
                  Skills: [
                    {
                      Id: "024338",
                      Name: "ALGORITHMS",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "139",
                  SubTaxonomyName: "Network",
                  PercentOfOverall: 0,
                  PercentOfParent: 1,
                  Skills: [
                    {
                      Id: "025782",
                      Name: "NETWORK SECURITY",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-6",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 1,
                      },
                      LastUsed: {
                        Value: "2012-06-01",
                      },
                    },
                  ],
                },
              ],
            },
            {
              Id: "34",
              Name: "Business Operations and General Business",
              PercentOfOverall: 4,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "437",
                  SubTaxonomyName: "General Skills and Activities",
                  PercentOfOverall: 4,
                  PercentOfParent: 99,
                  Skills: [
                    {
                      Id: "021737",
                      Name: "METRICS",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 14,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "436",
                  SubTaxonomyName: "Management Activities or Functions",
                  PercentOfOverall: 0,
                  PercentOfParent: 1,
                  Skills: [
                    {
                      Id: "022750",
                      Name: "TRADING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
              ],
            },
            {
              Id: "71",
              Name: "Strategy and Planning",
              PercentOfOverall: 4,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "876",
                  SubTaxonomyName: "Workflow and Processes",
                  PercentOfOverall: 4,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "024213",
                      Name: "WORKFLOW",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 14,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                  ],
                },
              ],
            },
            {
              Id: "7",
              Name: "Finance",
              PercentOfOverall: 4,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "243",
                  SubTaxonomyName: "Other",
                  PercentOfOverall: 3,
                  PercentOfParent: 93,
                  Skills: [
                    {
                      Id: "017446",
                      Name: "ALGORITHMS",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "004809",
                      Name: "ASSET MANAGEMENT",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-5",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 22,
                      },
                      LastUsed: {
                        Value: "2016-04-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "235",
                  SubTaxonomyName: "Financial Planning & Analysis",
                  PercentOfOverall: 0,
                  PercentOfParent: 2,
                  Skills: [
                    {
                      Id: "080204",
                      Name: "TRADING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "245",
                  SubTaxonomyName: "Compliance",
                  PercentOfOverall: 0,
                  PercentOfParent: 2,
                  Skills: [
                    {
                      Id: "080179",
                      Name: "TRADING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "239",
                  SubTaxonomyName: "Trading",
                  PercentOfOverall: 0,
                  PercentOfParent: 2,
                  Skills: [
                    {
                      Id: "009789",
                      Name: "TRADING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
              ],
            },
            {
              Id: "69",
              Name: "QA and QC",
              PercentOfOverall: 3,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "931",
                  SubTaxonomyName: "Software",
                  PercentOfOverall: 3,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "023003",
                      Name: "AUTOMATED TESTING",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-5",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 22,
                      },
                      LastUsed: {
                        Value: "2016-04-01",
                      },
                    },
                  ],
                },
              ],
            },
            {
              Id: "77",
              Name: "Education",
              PercentOfOverall: 2,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "505",
                  SubTaxonomyName: "Positions",
                  PercentOfOverall: 2,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "026880",
                      Name: "TEACHING",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-1",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 3,
                      },
                      LastUsed: {
                        Value: "2019-04-01",
                      },
                    },
                  ],
                },
              ],
            },
            {
              Id: "64",
              Name: "Training",
              PercentOfOverall: 1,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "361",
                  SubTaxonomyName: "Other",
                  PercentOfOverall: 1,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "026879",
                      Name: "TEACHING",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-1",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 3,
                      },
                      LastUsed: {
                        Value: "2019-04-01",
                      },
                    },
                  ],
                },
              ],
            },
            {
              Id: "1",
              Name: "Administrative or Clerical",
              PercentOfOverall: 1,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "110",
                  SubTaxonomyName: "Billing and Collections",
                  PercentOfOverall: 0,
                  PercentOfParent: 55,
                  Skills: [
                    {
                      Id: "002497",
                      Name: "AR",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "115",
                  SubTaxonomyName: "Computer Related",
                  PercentOfOverall: 0,
                  PercentOfParent: 45,
                  Skills: [
                    {
                      Id: "015035",
                      Name: "DATABASE MANAGEMENT",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
              ],
            },
            {
              Id: "93",
              Name: "User Experience",
              PercentOfOverall: 1,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "567",
                  SubTaxonomyName: "Information Architect",
                  PercentOfOverall: 0,
                  PercentOfParent: 33,
                  Skills: [
                    {
                      Id: "5570104",
                      Name: "HCI",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                      Variations: [
                        {
                          Id: "5570248",
                          Name: "HUMAN COMPUTER INTERACTION",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  SubTaxonomyId: "558",
                  SubTaxonomyName: "User Research",
                  PercentOfOverall: 0,
                  PercentOfParent: 33,
                  Skills: [
                    {
                      Id: "5570002",
                      Name: "HUMAN COMPUTER INTERACTION",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                      Variations: [
                        {
                          Id: "5570200",
                          Name: "HCI",
                          FoundIn: [
                            {
                              SectionType: "PROJECT_HEADERS",
                            },
                            {
                              SectionType: "WORK HISTORY",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  SubTaxonomyId: "561",
                  SubTaxonomyName: "Human Computer Interaction",
                  PercentOfOverall: 0,
                  PercentOfParent: 33,
                  Skills: [
                    {
                      Id: "5570025",
                      Name: "HUMAN COMPUTER INTERACTION",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                      Variations: [
                        {
                          Id: "5570026",
                          Name: "HCI",
                          FoundIn: [
                            {
                              SectionType: "PROJECT_HEADERS",
                            },
                            {
                              SectionType: "WORK HISTORY",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              Id: "92",
              Name: "Knowledge and Learning Management",
              PercentOfOverall: 1,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "903",
                  SubTaxonomyName: "General Knowledge and Learning Management",
                  PercentOfOverall: 1,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "200040",
                      Name: "NEURAL",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                      Variations: [
                        {
                          Id: "200039",
                          Name: "NEURAL NETWORKS",
                          FoundIn: [
                            {
                              SectionType: "PROJECT_HEADERS",
                            },
                            {
                              SectionType: "WORK HISTORY",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              Id: "82",
              Name: "Hotel and Hospitality",
              PercentOfOverall: 0,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "180",
                  SubTaxonomyName: "Restaurant and Bar",
                  PercentOfOverall: 0,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "027556",
                      Name: "WAITER",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
              ],
            },
            {
              Id: "13",
              Name: "Manufacturing",
              PercentOfOverall: 0,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "206",
                  SubTaxonomyName: "Machining, Metalworking, Tool and Die",
                  PercentOfOverall: 0,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "022363",
                      Name: "FANUC",
                      ExistsInText: false,
                      Variations: [
                        {
                          Id: "007186",
                          Name: "ROBOTICS",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                            {
                              SectionType: "WORK HISTORY",
                              Id: "POS-3",
                            },
                          ],
                          ExistsInText: true,
                          MonthsExperience: {
                            Value: 4,
                          },
                          LastUsed: {
                            Value: "2018-07-31",
                          },
                        },
                      ],
                      MonthsExperience: {
                        Value: 4,
                      },
                      LastUsed: {
                        Value: "2018-07-31",
                      },
                      ChildrenMonthsExperience: {
                        Value: 4,
                      },
                      ChildrenLastUsed: {
                        Value: "2018-07-31",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      Associations: [
        {
          Organization:
            "Rocket from scratch and launched from a farm in Georgia, as member of Rocket Club at Georgia Tech",
          Role: "member",
        },
      ],
      LanguageCompetencies: [
        {
          Language: "English",
          LanguageCode: "en",
          FoundInContext: "[RESUME_LANGUAGE]",
        },
      ],
      Achievements: [
        "ACM ICPC Regionals: ACM ICPC Regionals 2013 Programming contest held in Amritapuri India --Our Team",
        "ranked #30 out of 300+ National level competing teams",
        "Top 1 percentile in National Level Engineering Entrance examination: Secured All India Rank #4120 out of 2",
        "Million* students (<0.1 Percentile) taking the Indian National Level Engineering Entrance examination",
        "Designed, built and Launch High power Rocket: Learnt to design, fabricate and Build High Power (NAR L1/L2)",
        "Rocket from scratch and launched from a farm in Georgia, as member of Rocket Club at Georgia Tech",
      ],
      QualificationsSummary:
        "Programming Skills\n• Scripting Languages: Python, C++ (Intermediate, >4000 Lines of Code)\n\n• Web Development: Frontend: Javascript, React.js, Bootstrap (Intermediate, >3000 LOC) Backend: Ruby\non Rails (Intermediate, >4000 LOC), Flask, REST APIs\n\n• Machine Learning / Computer Vision: scikit-learn, numpy, matplotlib, pandas, PyTorch (Intermediate,\n>2000 Lines of Code each)\n\n• Databases: MySQL, MongoDB\n\nCourses Competed\n• Graduate: Deep Learning, Computer Vision, Artificial Intelligence for Robotics, Reinforcement Learning,\nMachine Learning for Trading, Human Computer Interaction, Knowledge Based Artificial Intelligence,\nMachine Learning\n\n• Undergraduate: Algorithms and Datastructures, Database Management Systems, Operating Systems, Web\nTechnology.",
      ResumeMetadata: {
        FoundSections: [
          {
            FirstLineNumber: 2,
            LastLineNumber: 8,
            SectionType: "EDUCATION",
            HeaderTextFound: "Education",
          },
          {
            FirstLineNumber: 9,
            LastLineNumber: 56,
            SectionType: "WORK HISTORY",
            HeaderTextFound: "Experience",
          },
          {
            FirstLineNumber: 57,
            LastLineNumber: 78,
            SectionType: "PROJECT_HEADERS",
            HeaderTextFound: "Projects",
          },
          {
            FirstLineNumber: 79,
            LastLineNumber: 86,
            SectionType: "PERSONAL INTERESTS AND ACCOMPLISHMENTS",
            HeaderTextFound: "Achievements",
          },
          {
            FirstLineNumber: 87,
            LastLineNumber: 104,
            SectionType: "SKILLS",
            HeaderTextFound: "Programming Skills",
          },
        ],
        ResumeQuality: [
          {
            Level: "Data Missing",
            Findings: [
              {
                QualityCode: "213",
                Message:
                  "A street level address was not found in the contact information. A full contact address should always be included in a resume as it allows for location based searches.",
              },
            ],
          },
          {
            Level: "Suggested Improvements",
            Findings: [
              {
                QualityCode: "112",
                Message:
                  "The following section was identified as a skills section type: 'Programming Skills'. Skills should not be in a separate section, but instead, each skill should be included in the descriptions of work history or education.",
              },
            ],
          },
        ],
        ReservedData: {
          Phones: ["Mobile: 404-663-9270", "404-663-9270"],
          Names: [
            "Sreenivasan AC",
            "sreenivasan-ac",
            "Sreenivasan AC\tEmail: sreenivasan.nitt@gmail.com",
          ],
          EmailAddresses: ["sreenivasan.nitt@gmail.com"],
          Urls: ["https://www.linkedin.com/in/sreenivasan-ac"],
        },
        PlainText:
          'Sreenivasan AC\tEmail: sreenivasan.nitt@gmail.com\nhttps://www.linkedin.com/in/sreenivasan-ac/ LinkedIn Github Quora Medium\tMobile: 404-663-9270\nEducation\nGeorgia Institute of Technology\tAtlanta, Georgia, USA\n• Masters of Science in Computer Science;\tAug. 2017 - May. 2019\nSpecialization in Machine Learning\nNational Institute of Technology\tTiruchirapalli, India\n• Bachelors of Technology in Computer Science and Engineering\tAug. 2010 - June. 2014\n\nExperience\nGraduate Teaching Assistant\tAtlanta, Georgia\n• Georgia Institute of Technology\tJan 2019 - April 2019\n\nDeep Learning CS7643: Assisted Professor Zsolt Kira in conducting the course Deep Learning\nGraduate Research Assistant\tAtlanta, Georgia\n• Georgia Institute of Technology\tAug 2018 - Dec 2018\n\n: Worked on Research project under Professor James Tsai Transportation Lab - Evaluation of Object detection of\nTra c infrastructure using Registration and Fusion of 2D Camera and 3D LIDAR Point cloud Data.\nInvento Robotics\tBangalore, India\n• AI Application Developer for Humanoid Robot Company\tApr 2018 - July 2018 (4 months)\n\nO✏ine Conversation: Developed O✏ine Natural Language Understanding and Conversation Capability for a\nHumanoid Robot Mitra to understand context and Respond to users. Developed using RASA framework\n(Entity-Intent based). Setup the above as Alexa Skills for Guest registration and Movie recommendation using\nLambda Function. Developed web interface for testing Speech Conversation flows.\nEarly-stage growing Robotics AI Startup experience: worked directly under CEO Mr.Balaji Vishwanathan\n#1 followed Top-writer in Quora\nGroupon\tPalo Alto, CA\n• Software Development Engineer (Full Stack Developer)\tApril 2016 - June 2017 (1.2 years)\n\nMerchant Tools: Co-owner to develop a mobile-friendly web-application in AngularJS for creating Card Linked\nO↵ers used by 1500+ Sales Representatives and Merchants to create Groupon Deals.\nAPI Services: Owner for managing Contract Service and Fine Print API service. Automated the manual\nContract-signing process by integrating with DocuSign API, saving Groupon atleast $40,000 per month.\nTransitioned the FinePrint Service workflow from reading from static Google Spreadsheet to consume from\nupstream services dynamically through API integrations.\nSelf Service workflows: Implemented features and updates like Redemption Window, Blackout Dates, Fine\nPrints, Groupon Delivery and Takeout to support Merchant Self-service to create various Deal types and workflows.\n\nDeployments: Point of contact for Deployments for di↵erent Merchant Tools and services like Fine Print Service,\nContract Service, Self-service Backend Service, etc. Created Splunk dashboards for visualisation and Nagios alerts\nwhen metrics exceed thresholds.\nGroupon\tChennai, India\n• Software Development Engineer (Full Stack Developer)\tJune 2014 - April 2016 (2 years)\n\nDeal Creation Tool: Worked on Product features for the Deal Creation Tool used by Sales representatives to\ncreate di↵erent kinds of Deals. Transferred to Groupon, Palo Alto, California based on consistent performance.\nImage Asset Management: Developed features like Keyword Metadata management, Internationalization,\nAttribution for the Image Asset Management Tool used for managing Images used at Groupon.\nTDD Automated Testing: Followed TDD Automated Testing with Karma, Jasmine, Mocha.\nDefence Avionics Research Establishment\tBangalore, India\n• Intern\tMay 2012 - June 2012 (2 months)\n\nSecurity Testing and Analysis: Analysed Network security against attacks at Defence Organisation in their\ninternal networks and websites for vulnerabilities like SQL Injection, XSS Scripting, DDOS attack, and submitted a\nreport recommending 2 fixes.\nProjects\n• Computer Vision: 1. Implemented Image Convolution and generated Hybrid images. 2. Local feature matching\nbetween two images. 3. Implemented Scene Recognition with Bag of Words. 4. Implemented Face Detection with a\nSliding Window. 5. Deep CNN for scene recognition [Source]\n• Deep Learning: 1. Image Style transfer using CNN. 2. ConvNet on CIFAR-10 3. Image Captioning with LSTMs and\nRNNs.\n• Machine Learning: 1. Implemented Supervised and Unsupervised Learning algorithms using scikit-learn. 2. Used\nclustering (k-means, EM) and dimensionality reduction (PCA, ICA) to pre-process the data to train neural networks. 3.\nUsed Reinforcement Learning algorithms to navigate Grid world.\n• Machine Learning for Trading: Built a Market Simulator, Applied Machine Learning and Reinforcement Learning\n(Q-Learning) to past Stock data to compare and evaluate stock prediction accuracy. [Source]\n• Human-Robot Interaction: Analysed Human-Robot Interaction of Humanoid Robot acting as a Waiter in a\nRestaurant following HCI Design Cycle. [Report]\n• Augmented Reality: AR Mobile application Kasadara for school students to augment textbook images while learning.\nUsing Unity and C# [Details] [Demo]\n• Knowledge Based AI IQ solving Bot: Built an AI bot to solve Raven\'s Progressive Matrices Questions (IQ\nmeasurement test) using Case Based Reasoning approach - Fractal and A ne methods using Knowledge-Based Artificial\nIntelligence.\n• Virtual Reality application: Developed 360-degree Virtual Reality mobile application "DejaVu" during a Hackathon\nfor users to experience di↵erent Deal types like Hotels, Restaurants, Events in Google Cardboard VR as a Proof of\nConcept. [Demo]\n\nAchievements\n• ACM ICPC Regionals: ACM ICPC Regionals 2013 Programming contest held in Amritapuri India --Our Team\nranked #30 out of 300+ National level competing teams.\n• Top 1 percentile in National Level Engineering Entrance examination: Secured All India Rank #4120 out of 2\n*Million* students (<0.1 Percentile) taking the Indian National Level Engineering Entrance examination.\n• Designed, built and Launch High power Rocket: Learnt to design, fabricate and Build High Power (NAR L1/L2)\nRocket from scratch and launched from a farm in Georgia, as member of Rocket Club at Georgia Tech.\n\nProgramming Skills\n• Scripting Languages: Python, C++ (Intermediate, >4000 Lines of Code)\n\n• Web Development: Frontend: Javascript, React.js, Bootstrap (Intermediate, >3000 LOC) Backend: Ruby\non Rails (Intermediate, >4000 LOC), Flask, REST APIs\n\n• Machine Learning / Computer Vision: scikit-learn, numpy, matplotlib, pandas, PyTorch (Intermediate,\n>2000 Lines of Code each)\n\n• Databases: MySQL, MongoDB\n\nCourses Competed\n• Graduate: Deep Learning, Computer Vision, Artificial Intelligence for Robotics, Reinforcement Learning,\nMachine Learning for Trading, Human Computer Interaction, Knowledge Based Artificial Intelligence,\nMachine Learning\n\n• Undergraduate: Algorithms and Datastructures, Database Management Systems, Operating Systems, Web\nTechnology.',
        DocumentLanguage: "en",
        DocumentCulture: "en-US",
        ParserSettings:
          "Coverage.MilitaryHistoryAndSecurityCredentials = True; Coverage.PatentsPublicationsAndSpeakingEvents = True; Coverage.PersonalAttributes = True; Coverage.Training = True; Culture.CountryCodeForUnitedKingdomIsUK = True; Culture.DefaultCountryCode = US; Culture.Language = English; Culture.PreferEnglishVersionIfTwoLanguagesInDocument = False; Data.UserDefinedParsing = False; OutputFormat.AssumeCompanyNameFromPrecedingJob = False; OutputFormat.ContactMethod.PackStyle = Split; OutputFormat.DateOutputStyle = ExplicitlyKnownDateInfoOnly; OutputFormat.NestJobsBasedOnDateRanges = True; OutputFormat.NormalizeRegions = False; OutputFormat.SkillsStyle = Default; OutputFormat.StripParsedDataFromPositionHistoryDescription = True; OutputFormat.TelcomNumber.Style = Raw; OutputFormat.XmlFormat = HrXmlResume25",
        DocumentLastModified: "2019-09-10",
        SovrenSignature: ["idX+//////8="],
      },
    },
    RedactedResumeData: {
      ContactInformation: {},
      Education: {
        HighestDegree: {
          Name: {
            Raw: "Masters of Science in Computer Science",
            Normalized: "masters",
          },
          Type: "masters",
        },
        EducationDetails: [
          {
            Id: "DEG-1",
            Text:
              "Georgia Institute of Technology\tAtlanta, Georgia, USA\n• Masters of Science in Computer Science;\tAug. 2017 - May. 2019\nSpecialization in Machine Learning",
            SchoolName: {
              Raw: "Georgia Institute of Technology",
              Normalized: "Georgia Institute of Technology",
            },
            SchoolType: "university",
            Location: {
              CountryCode: "US",
              Regions: ["Georgia"],
              Municipality: "Atlanta",
            },
            Degree: {
              Name: {
                Raw: "Masters of Science in Computer Science",
                Normalized: "masters",
              },
              Type: "masters",
            },
            Majors: ["Machine Learning"],
            LastEducationDate: {
              Date: "2019-05-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
          },
          {
            Id: "DEG-2",
            Text:
              "National Institute of Technology\tTiruchirapalli, India\n• Bachelors of Technology in Computer Science and Engineering\tAug. 2010 - June. 2014",
            SchoolName: {
              Raw: "National Institute of Technology",
              Normalized: "National Institute of Technology",
            },
            SchoolType: "university",
            Location: {
              CountryCode: "IN",
              Municipality: "Tiruchirapalli",
            },
            Degree: {
              Name: {
                Raw:
                  "Bachelors of Technology in Computer Science and Engineering",
                Normalized: "bachelors",
              },
              Type: "bachelors",
            },
            Majors: ["Computer Science and Engineering"],
            LastEducationDate: {
              Date: "2014-06-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
          },
        ],
      },
      EmploymentHistory: {
        ExperienceSummary: {
          Description:
            "   ~~~~~~~~~  's experience appears to be mostly concentrated in Information Technology (mostly Programming) and slightly concentrated in Sales (mostly General).    ~~~~~~~~~  's experience appears to be lower-to-mid level, with about 4 years of experience.",
          MonthsOfWorkExperience: 49,
          MonthsOfManagementExperience: 0,
          ExecutiveType: "NONE",
          AverageMonthsPerEmployer: 12,
          FulltimeDirectHirePredictiveIndex: 40,
          ManagementStory: "",
          CurrentManagementLevel: "",
          ManagementScore: 0,
        },
        Positions: [
          {
            Id: "POS-1",
            Employer: {
              Name: {
                Probability: "Confident",
                Raw: "Georgia Institute of Technology",
                Normalized: "Georgia Institute of Technology",
              },
              Location: {
                CountryCode: "US",
                Regions: ["Georgia"],
                Municipality: "Atlanta",
              },
            },
            RelatedToByCompanyName: ["POS-2"],
            IsSelfEmployed: false,
            IsCurrent: false,
            JobTitle: {
              Raw: "Graduate Teaching Assistant",
              Normalized: "Graduate Teaching Assistant",
              Probability: "Confident",
            },
            StartDate: {
              Date: "2019-01-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            EndDate: {
              Date: "2019-04-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            JobType: "directHire",
            TaxonomyName: "Information Technology",
            SubTaxonomyName: "Machine Learning",
            JobLevel: "Experienced (non-manager)",
            TaxonomyPercentage: 100,
            Description:
              "Deep Learning CS7643: Assisted Professor Zsolt Kira in conducting the course Deep Learning",
          },
          {
            Id: "POS-2",
            Employer: {
              Name: {
                Probability: "Confident",
                Raw: "Georgia Institute of Technology",
                Normalized: "Georgia Institute of Technology",
              },
              Location: {
                CountryCode: "US",
                Regions: ["Georgia"],
                Municipality: "Atlanta",
              },
            },
            RelatedToByCompanyName: ["POS-1"],
            IsSelfEmployed: false,
            IsCurrent: false,
            JobTitle: {
              Raw: "Graduate Research Assistant",
              Normalized: "Graduate Research Assistant",
              Probability: "Confident",
            },
            StartDate: {
              Date: "2018-08-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            EndDate: {
              Date: "2018-12-31",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            JobType: "directHire",
            TaxonomyName: "Engineering",
            SubTaxonomyName: "Robotics and Automation",
            JobLevel: "Experienced (non-manager)",
            TaxonomyPercentage: 100,
            Description:
              "Worked on Research project under Professor James Tsai Transportation Lab - Evaluation of Object detection of Tra c infrastructure using Registration and Fusion of 2D Camera and 3D LIDAR Point cloud Data.",
          },
          {
            Id: "POS-3",
            Employer: {
              Name: {
                Probability: "Confident",
                Raw: "Invento Robotics",
                Normalized: "Invento Robotics",
              },
              Location: {
                CountryCode: "IN",
                Municipality: "Bangalore",
              },
            },
            IsSelfEmployed: false,
            IsCurrent: false,
            JobTitle: {
              Raw: "AI Application Developer for Humanoid Robot Company",
              Normalized: "AI Application Developer for Humanoid Robot Company",
              Probability: "Confident",
              Variations: ["AI Application Developer"],
            },
            StartDate: {
              Date: "2018-04-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            EndDate: {
              Date: "2018-07-31",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            JobType: "directHire",
            TaxonomyName: "Engineering",
            SubTaxonomyName: "Robotics and Automation",
            JobLevel: "Experienced (non-manager)",
            TaxonomyPercentage: 60,
            Description:
              "O✏ine Conversation: Developed O✏ine Natural Language Understanding and Conversation Capability for a\nHumanoid Robot Mitra to understand context and Respond to users. Developed using RASA framework\n(Entity-Intent based). Setup the above as Alexa Skills for Guest registration and Movie recommendation using\nLambda Function. Developed web interface for testing Speech Conversation flows.\nEarly-stage growing Robotics AI Startup experience: worked directly under CEO Mr.Balaji Vishwanathan",
          },
          {
            Id: "POS-4",
            Employer: {
              Name: {
                Probability: "Confident",
                Raw: "Groupon",
                Normalized: "Groupon",
              },
              Location: {
                CountryCode: "US",
                Regions: ["CA"],
                Municipality: "Palo Alto",
              },
            },
            RelatedToByCompanyName: ["POS-5"],
            IsSelfEmployed: false,
            IsCurrent: false,
            JobTitle: {
              Raw: "#1 followed Top-writer",
              Normalized: "1 followed Top writer",
              Probability: "Confident",
              Variations: ["Top-writer"],
            },
            StartDate: {
              Date: "2016-04-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            EndDate: {
              Date: "2017-06-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            JobType: "directHire",
            TaxonomyName: "Information Technology",
            SubTaxonomyName: "Mobile Applications",
            JobLevel: "Experienced (non-manager)",
            TaxonomyPercentage: 57,
            Description:
              "(1.2 years)\n\nMerchant Tools: Co-owner to develop a mobile-friendly web-application in AngularJS for creating Card Linked\nO↵ers used by 1500+ Sales Representatives and Merchants to create Groupon Deals.\nAPI Services: Owner for managing Contract Service and Fine Print API service. Automated the manual\nContract-signing process by integrating with DocuSign API, saving Groupon atleast $40,000 per month.\nTransitioned the FinePrint Service workflow from reading from static Google Spreadsheet to consume from upstream services dynamically through API integrations.\nSelf Service workflows: Implemented features and updates like Redemption Window, Blackout Dates, Fine\nPrints, Groupon Delivery and Takeout to support Merchant Self-service to create various Deal types and workflows.\n\nDeployments: Point of contact for Deployments for di↵erent Merchant Tools and services like Fine Print Service,\nContract Service, Self-service Backend Service, etc. Created Splunk dashboards for visualisation and Nagios alerts when metrics exceed thresholds.",
          },
          {
            Id: "POS-5",
            Employer: {
              Name: {
                Probability: "Confident",
                Raw: "Groupon",
                Normalized: "Groupon",
              },
              Location: {
                CountryCode: "IN",
                Municipality: "Chennai",
              },
            },
            RelatedToByCompanyName: ["POS-4"],
            IsSelfEmployed: false,
            IsCurrent: false,
            JobTitle: {
              Raw: "Software Development Engineer (Full Stack Developer)",
              Normalized: "Software Development Engineer Full Stack Developer",
              Probability: "Confident",
              Variations: [
                "Software Development Engineer",
                "(Full Stack Developer)",
                "Full Stack Developer",
              ],
            },
            StartDate: {
              Date: "2014-06-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            EndDate: {
              Date: "2016-04-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            JobType: "directHire",
            TaxonomyName: "Information Technology",
            SubTaxonomyName: "Big Data",
            JobLevel: "Experienced (non-manager)",
            TaxonomyPercentage: 25,
            Description:
              "Deal Creation Tool: Worked on Product features for the Deal Creation Tool used by Sales representatives to create di↵erent kinds of Deals. Transferred to Groupon, Palo Alto, California based on consistent performance.\nImage Asset Management: Developed features like Keyword Metadata management, Internationalization,\nAttribution for the Image Asset Management Tool used for managing Images used at Groupon.\nTDD Automated Testing: Followed TDD Automated Testing with Karma, Jasmine, Mocha.",
          },
          {
            Id: "POS-6",
            Employer: {
              Name: {
                Probability: "Confident",
                Raw: "Defence Avionics Research Establishment",
                Normalized: "Defence Avionics Research Establishment",
              },
              Location: {
                CountryCode: "IN",
                Municipality: "Bangalore",
              },
            },
            IsSelfEmployed: false,
            IsCurrent: false,
            JobTitle: {
              Raw: "Intern",
              Normalized: "Intern",
              Probability: "Confident",
            },
            StartDate: {
              Date: "2012-05-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            EndDate: {
              Date: "2012-06-01",
              IsCurrentDate: false,
              FoundYear: true,
              FoundMonth: true,
              FoundDay: false,
            },
            JobType: "internship",
            TaxonomyName: "Information Technology",
            SubTaxonomyName: "Privacy and Data Security",
            JobLevel: "Entry Level",
            TaxonomyPercentage: 100,
            Description:
              "Security Testing and Analysis: Analysed Network security against attacks at Defence Organisation in their\ninternal networks and websites for vulnerabilities like SQL Injection, XSS Scripting, DDOS attack, and submitted a\nreport recommending 2 fixes.",
          },
        ],
      },
      SkillsData: [
        {
          Root: "Sovren",
          Taxonomies: [
            {
              Id: "10",
              Name: "Information Technology",
              PercentOfOverall: 57,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "204",
                  SubTaxonomyName: "Programming",
                  PercentOfOverall: 25,
                  PercentOfParent: 45,
                  Skills: [
                    {
                      Id: "021194",
                      Name: "API",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 14,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                    {
                      Id: "012275",
                      Name: "C#",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "012287",
                      Name: "C++",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "018787",
                      Name: "HCI",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "025394",
                      Name: "JAVASCRIPT",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                      Variations: [
                        {
                          Id: "3391101",
                          Name: "BOOTSTRAP",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                    {
                      Id: "021679",
                      Name: "METADATA",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-5",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 22,
                      },
                      LastUsed: {
                        Value: "2016-04-01",
                      },
                    },
                    {
                      Id: "003276",
                      Name: "NATURAL",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-3",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 4,
                      },
                      LastUsed: {
                        Value: "2018-07-31",
                      },
                    },
                    {
                      Id: "006120",
                      Name: "PYTHON",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                      Variations: [
                        {
                          Id: "3391121",
                          Name: "FLASK",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                          ],
                          ExistsInText: true,
                        },
                        {
                          Id: "3391120",
                          Name: "MATPLOTLIB",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                          ],
                          ExistsInText: true,
                        },
                        {
                          Id: "3391118",
                          Name: "NUMPY",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                    {
                      Id: "1004736",
                      Name: "Ruby",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                      Variations: [
                        {
                          Id: "100473602",
                          Name: "Rails",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                    {
                      Id: "024873",
                      Name: "SCRIPTING",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-6",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 1,
                      },
                      LastUsed: {
                        Value: "2012-06-01",
                      },
                    },
                    {
                      Id: "022594",
                      Name: "STRUCTURED SOFTWARE",
                      ExistsInText: false,
                      Variations: [
                        {
                          Id: "008213",
                          Name: "SOFTWARE DEVELOPMENT",
                          FoundIn: [
                            {
                              SectionType: "WORK HISTORY",
                              Id: "POS-4",
                            },
                            {
                              SectionType: "WORK HISTORY",
                              Id: "POS-5",
                            },
                          ],
                          ExistsInText: true,
                          MonthsExperience: {
                            Value: 36,
                          },
                          LastUsed: {
                            Value: "2017-06-01",
                          },
                        },
                      ],
                      MonthsExperience: {
                        Value: 36,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                      ChildrenMonthsExperience: {
                        Value: 36,
                      },
                      ChildrenLastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "720",
                  SubTaxonomyName: "Machine Learning",
                  PercentOfOverall: 10,
                  PercentOfParent: 17,
                  Skills: [
                    {
                      Id: "7200018",
                      Name: "DEEP LEARNING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-1",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 3,
                      },
                      LastUsed: {
                        Value: "2019-04-01",
                      },
                    },
                    {
                      Id: "7200019",
                      Name: "DIMENSIONALITY REDUCTION",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "7200030",
                      Name: "INDEPENDENT COMPONENT ANALYSIS",
                      ExistsInText: false,
                      Variations: [
                        {
                          Id: "7200031",
                          Name: "ICA",
                          FoundIn: [
                            {
                              SectionType: "PROJECT_HEADERS",
                            },
                            {
                              SectionType: "WORK HISTORY",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                    {
                      Id: "7200034",
                      Name: "K-MEANS",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "7200149",
                      Name: "MACHINE LEARNING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "EDUCATION",
                          Id: "DEG-1",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 21,
                      },
                      LastUsed: {
                        Value: "2019-05-01",
                      },
                    },
                    {
                      Id: "7200042",
                      Name: "NEURAL NETWORKS",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "7200049",
                      Name: "PRINCIPAL COMPONENT ANALYSIS",
                      ExistsInText: false,
                      Variations: [
                        {
                          Id: "7200050",
                          Name: "PCA",
                          FoundIn: [
                            {
                              SectionType: "PROJECT_HEADERS",
                            },
                            {
                              SectionType: "WORK HISTORY",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                    {
                      Id: "7200131",
                      Name: "Q-LEARNING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "7200054",
                      Name: "REINFORCEMENT LEARNING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "553",
                  SubTaxonomyName: "Big Data",
                  PercentOfOverall: 6,
                  PercentOfParent: 11,
                  Skills: [
                    {
                      Id: "5530905",
                      Name: "ARTIFICIAL INTELLIGENCE",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "5530921",
                      Name: "CLUSTERING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "5531016",
                      Name: "MACHINE LEARNING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "EDUCATION",
                          Id: "DEG-1",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 21,
                      },
                      LastUsed: {
                        Value: "2019-05-01",
                      },
                    },
                    {
                      Id: "5531026",
                      Name: "METADATA",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-5",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 22,
                      },
                      LastUsed: {
                        Value: "2016-04-01",
                      },
                    },
                    {
                      Id: "5530805",
                      Name: "MONGODB",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "5530851",
                      Name: "SPLUNK",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 14,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "349",
                  SubTaxonomyName:
                    "Operations, Monitoring and Software Management",
                  PercentOfOverall: 4,
                  PercentOfParent: 8,
                  Skills: [
                    {
                      Id: "3490022",
                      Name: "CLUSTERING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "003261",
                      Name: "NAGIOS",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 14,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                    {
                      Id: "3490025",
                      Name: "NETWORK SECURITY",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-6",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 1,
                      },
                      LastUsed: {
                        Value: "2012-06-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "552",
                  SubTaxonomyName: "Mobile Applications",
                  PercentOfOverall: 4,
                  PercentOfParent: 7,
                  Skills: [
                    {
                      Id: "5520505",
                      Name: "ANGULARJS",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 14,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                    {
                      Id: "5520522",
                      Name: "BOOTSTRAP",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "556",
                  SubTaxonomyName: "Privacy and Data Security",
                  PercentOfOverall: 3,
                  PercentOfParent: 4,
                  Skills: [
                    {
                      Id: "5551284",
                      Name: "DDOS",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-6",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 1,
                      },
                      LastUsed: {
                        Value: "2012-06-01",
                      },
                    },
                    {
                      Id: "5551270",
                      Name: "SPLUNK",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 14,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "338",
                  SubTaxonomyName: "Security",
                  PercentOfOverall: 2,
                  PercentOfParent: 4,
                  Skills: [
                    {
                      Id: "3380002",
                      Name: "MACHINE LEARNING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "EDUCATION",
                          Id: "DEG-1",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 21,
                      },
                      LastUsed: {
                        Value: "2019-05-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "193",
                  SubTaxonomyName: "Database",
                  PercentOfOverall: 1,
                  PercentOfParent: 2,
                  Skills: [
                    {
                      Id: "026777",
                      Name: "DATABASE MODELING",
                      ExistsInText: false,
                      Variations: [
                        {
                          Id: "022486",
                          Name: "DATABASE",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                    {
                      Id: "003243",
                      Name: "MYSQL",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "008481",
                      Name: "SQL",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-6",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 1,
                      },
                      LastUsed: {
                        Value: "2012-06-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "196",
                  SubTaxonomyName: "Internet",
                  PercentOfOverall: 1,
                  PercentOfParent: 1,
                  Skills: [
                    {
                      Id: "022110",
                      Name: "SECURITY",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-6",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 1,
                      },
                      LastUsed: {
                        Value: "2012-06-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "718",
                  SubTaxonomyName: "Distributed Systems",
                  PercentOfOverall: 0,
                  PercentOfParent: 1,
                  Skills: [
                    {
                      Id: "7180010",
                      Name: "REST",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "550",
                  SubTaxonomyName: "Cloud Computing",
                  PercentOfOverall: 0,
                  PercentOfParent: 0,
                  Skills: [
                    {
                      Id: "5500361",
                      Name: "MONGODB",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "192",
                  SubTaxonomyName: "Data Mining",
                  PercentOfOverall: 0,
                  PercentOfParent: 0,
                  Skills: [
                    {
                      Id: "003449",
                      Name: "ARTIFICIAL INTELLIGENCE",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "555",
                  SubTaxonomyName: "Enterprise Storage",
                  PercentOfOverall: 0,
                  PercentOfParent: 0,
                  Skills: [
                    {
                      Id: "5551333",
                      Name: "CLUSTERING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "198",
                  SubTaxonomyName: "Network",
                  PercentOfOverall: 0,
                  PercentOfParent: 0,
                  Skills: [
                    {
                      Id: "013564",
                      Name: "CLUSTERING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "253",
                  SubTaxonomyName: "Protocols and Standards",
                  PercentOfOverall: 0,
                  PercentOfParent: 0,
                  Skills: [
                    {
                      Id: "019131",
                      Name: "HUMAN COMPUTER INTERACTION",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
              ],
            },
            {
              Id: "20",
              Name: "Sales",
              PercentOfOverall: 12,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "105",
                  SubTaxonomyName: "General",
                  PercentOfOverall: 12,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "030814",
                      Name: "SALES REPRESENTATIVES",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-5",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 36,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                  ],
                },
              ],
            },
            {
              Id: "5",
              Name: "Engineering",
              PercentOfOverall: 11,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "735",
                  SubTaxonomyName: "Robotics and Automation",
                  PercentOfOverall: 6,
                  PercentOfParent: 58,
                  Skills: [
                    {
                      Id: "014117",
                      Name: "COMPUTER VISION",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "555121648",
                      Name: "ROBOTICS",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-3",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 4,
                      },
                      LastUsed: {
                        Value: "2018-07-31",
                      },
                    },
                    {
                      Id: "555121667",
                      Name: "SENSORS",
                      ExistsInText: false,
                      Variations: [
                        {
                          Id: "555121669",
                          Name: "LIDAR",
                          FoundIn: [
                            {
                              SectionType: "WORK HISTORY",
                              Id: "POS-2",
                            },
                          ],
                          ExistsInText: true,
                          MonthsExperience: {
                            Value: 5,
                          },
                          LastUsed: {
                            Value: "2018-12-31",
                          },
                        },
                      ],
                      MonthsExperience: {
                        Value: 5,
                      },
                      LastUsed: {
                        Value: "2018-12-31",
                      },
                      ChildrenMonthsExperience: {
                        Value: 5,
                      },
                      ChildrenLastUsed: {
                        Value: "2018-12-31",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "137",
                  SubTaxonomyName: "Industrial",
                  PercentOfOverall: 1,
                  PercentOfParent: 11,
                  Skills: [
                    {
                      Id: "080867",
                      Name: "ROBOT",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-3",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 4,
                      },
                      LastUsed: {
                        Value: "2018-07-31",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "297",
                  SubTaxonomyName: "Transportation",
                  PercentOfOverall: 1,
                  PercentOfParent: 11,
                  Skills: [
                    {
                      Id: "080559",
                      Name: "ROBOT",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-3",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 4,
                      },
                      LastUsed: {
                        Value: "2018-07-31",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "307",
                  SubTaxonomyName: "General Engineering",
                  PercentOfOverall: 1,
                  PercentOfParent: 11,
                  Skills: [
                    {
                      Id: "080522",
                      Name: "FANUC",
                      ExistsInText: false,
                      Variations: [
                        {
                          Id: "007187",
                          Name: "ROBOTICS",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                            {
                              SectionType: "WORK HISTORY",
                              Id: "POS-3",
                            },
                          ],
                          ExistsInText: true,
                          MonthsExperience: {
                            Value: 4,
                          },
                          LastUsed: {
                            Value: "2018-07-31",
                          },
                        },
                      ],
                      MonthsExperience: {
                        Value: 4,
                      },
                      LastUsed: {
                        Value: "2018-07-31",
                      },
                      ChildrenMonthsExperience: {
                        Value: 4,
                      },
                      ChildrenLastUsed: {
                        Value: "2018-07-31",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "311",
                  SubTaxonomyName: "Air and Aerospace",
                  PercentOfOverall: 1,
                  PercentOfParent: 5,
                  Skills: [
                    {
                      Id: "080268",
                      Name: "AVIONICS",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "080260",
                      Name: "SIMULATOR",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "144",
                  SubTaxonomyName: "Computer Hardware",
                  PercentOfOverall: 0,
                  PercentOfParent: 2,
                  Skills: [
                    {
                      Id: "080790",
                      Name: "AVIONICS",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "298",
                  SubTaxonomyName: "Surveying",
                  PercentOfOverall: 0,
                  PercentOfParent: 2,
                  Skills: [
                    {
                      Id: "024338",
                      Name: "ALGORITHMS",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "139",
                  SubTaxonomyName: "Network",
                  PercentOfOverall: 0,
                  PercentOfParent: 1,
                  Skills: [
                    {
                      Id: "025782",
                      Name: "NETWORK SECURITY",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-6",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 1,
                      },
                      LastUsed: {
                        Value: "2012-06-01",
                      },
                    },
                  ],
                },
              ],
            },
            {
              Id: "34",
              Name: "Business Operations and General Business",
              PercentOfOverall: 4,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "437",
                  SubTaxonomyName: "General Skills and Activities",
                  PercentOfOverall: 4,
                  PercentOfParent: 99,
                  Skills: [
                    {
                      Id: "021737",
                      Name: "METRICS",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 14,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "436",
                  SubTaxonomyName: "Management Activities or Functions",
                  PercentOfOverall: 0,
                  PercentOfParent: 1,
                  Skills: [
                    {
                      Id: "022750",
                      Name: "TRADING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
              ],
            },
            {
              Id: "71",
              Name: "Strategy and Planning",
              PercentOfOverall: 4,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "876",
                  SubTaxonomyName: "Workflow and Processes",
                  PercentOfOverall: 4,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "024213",
                      Name: "WORKFLOW",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-4",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 14,
                      },
                      LastUsed: {
                        Value: "2017-06-01",
                      },
                    },
                  ],
                },
              ],
            },
            {
              Id: "7",
              Name: "Finance",
              PercentOfOverall: 4,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "243",
                  SubTaxonomyName: "Other",
                  PercentOfOverall: 3,
                  PercentOfParent: 93,
                  Skills: [
                    {
                      Id: "017446",
                      Name: "ALGORITHMS",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                    {
                      Id: "004809",
                      Name: "ASSET MANAGEMENT",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-5",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 22,
                      },
                      LastUsed: {
                        Value: "2016-04-01",
                      },
                    },
                  ],
                },
                {
                  SubTaxonomyId: "235",
                  SubTaxonomyName: "Financial Planning & Analysis",
                  PercentOfOverall: 0,
                  PercentOfParent: 2,
                  Skills: [
                    {
                      Id: "080204",
                      Name: "TRADING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "245",
                  SubTaxonomyName: "Compliance",
                  PercentOfOverall: 0,
                  PercentOfParent: 2,
                  Skills: [
                    {
                      Id: "080179",
                      Name: "TRADING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "239",
                  SubTaxonomyName: "Trading",
                  PercentOfOverall: 0,
                  PercentOfParent: 2,
                  Skills: [
                    {
                      Id: "009789",
                      Name: "TRADING",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "SKILLS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
              ],
            },
            {
              Id: "69",
              Name: "QA and QC",
              PercentOfOverall: 3,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "931",
                  SubTaxonomyName: "Software",
                  PercentOfOverall: 3,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "023003",
                      Name: "AUTOMATED TESTING",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-5",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 22,
                      },
                      LastUsed: {
                        Value: "2016-04-01",
                      },
                    },
                  ],
                },
              ],
            },
            {
              Id: "77",
              Name: "Education",
              PercentOfOverall: 2,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "505",
                  SubTaxonomyName: "Positions",
                  PercentOfOverall: 2,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "026880",
                      Name: "TEACHING",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-1",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 3,
                      },
                      LastUsed: {
                        Value: "2019-04-01",
                      },
                    },
                  ],
                },
              ],
            },
            {
              Id: "64",
              Name: "Training",
              PercentOfOverall: 1,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "361",
                  SubTaxonomyName: "Other",
                  PercentOfOverall: 1,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "026879",
                      Name: "TEACHING",
                      FoundIn: [
                        {
                          SectionType: "WORK HISTORY",
                          Id: "POS-1",
                        },
                      ],
                      ExistsInText: true,
                      MonthsExperience: {
                        Value: 3,
                      },
                      LastUsed: {
                        Value: "2019-04-01",
                      },
                    },
                  ],
                },
              ],
            },
            {
              Id: "1",
              Name: "Administrative or Clerical",
              PercentOfOverall: 1,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "110",
                  SubTaxonomyName: "Billing and Collections",
                  PercentOfOverall: 0,
                  PercentOfParent: 55,
                  Skills: [
                    {
                      Id: "002497",
                      Name: "AR",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
                {
                  SubTaxonomyId: "115",
                  SubTaxonomyName: "Computer Related",
                  PercentOfOverall: 0,
                  PercentOfParent: 45,
                  Skills: [
                    {
                      Id: "015035",
                      Name: "DATABASE MANAGEMENT",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
              ],
            },
            {
              Id: "93",
              Name: "User Experience",
              PercentOfOverall: 1,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "567",
                  SubTaxonomyName: "Information Architect",
                  PercentOfOverall: 0,
                  PercentOfParent: 33,
                  Skills: [
                    {
                      Id: "5570104",
                      Name: "HCI",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                      Variations: [
                        {
                          Id: "5570248",
                          Name: "HUMAN COMPUTER INTERACTION",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  SubTaxonomyId: "558",
                  SubTaxonomyName: "User Research",
                  PercentOfOverall: 0,
                  PercentOfParent: 33,
                  Skills: [
                    {
                      Id: "5570002",
                      Name: "HUMAN COMPUTER INTERACTION",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                      Variations: [
                        {
                          Id: "5570200",
                          Name: "HCI",
                          FoundIn: [
                            {
                              SectionType: "PROJECT_HEADERS",
                            },
                            {
                              SectionType: "WORK HISTORY",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  SubTaxonomyId: "561",
                  SubTaxonomyName: "Human Computer Interaction",
                  PercentOfOverall: 0,
                  PercentOfParent: 33,
                  Skills: [
                    {
                      Id: "5570025",
                      Name: "HUMAN COMPUTER INTERACTION",
                      FoundIn: [
                        {
                          SectionType: "SKILLS",
                        },
                      ],
                      ExistsInText: true,
                      Variations: [
                        {
                          Id: "5570026",
                          Name: "HCI",
                          FoundIn: [
                            {
                              SectionType: "PROJECT_HEADERS",
                            },
                            {
                              SectionType: "WORK HISTORY",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              Id: "92",
              Name: "Knowledge and Learning Management",
              PercentOfOverall: 1,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "903",
                  SubTaxonomyName: "General Knowledge and Learning Management",
                  PercentOfOverall: 1,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "200040",
                      Name: "NEURAL",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                      Variations: [
                        {
                          Id: "200039",
                          Name: "NEURAL NETWORKS",
                          FoundIn: [
                            {
                              SectionType: "PROJECT_HEADERS",
                            },
                            {
                              SectionType: "WORK HISTORY",
                            },
                          ],
                          ExistsInText: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              Id: "82",
              Name: "Hotel and Hospitality",
              PercentOfOverall: 0,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "180",
                  SubTaxonomyName: "Restaurant and Bar",
                  PercentOfOverall: 0,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "027556",
                      Name: "WAITER",
                      FoundIn: [
                        {
                          SectionType: "PROJECT_HEADERS",
                        },
                        {
                          SectionType: "WORK HISTORY",
                        },
                      ],
                      ExistsInText: true,
                    },
                  ],
                },
              ],
            },
            {
              Id: "13",
              Name: "Manufacturing",
              PercentOfOverall: 0,
              SubTaxonomies: [
                {
                  SubTaxonomyId: "206",
                  SubTaxonomyName: "Machining, Metalworking, Tool and Die",
                  PercentOfOverall: 0,
                  PercentOfParent: 100,
                  Skills: [
                    {
                      Id: "022363",
                      Name: "FANUC",
                      ExistsInText: false,
                      Variations: [
                        {
                          Id: "007186",
                          Name: "ROBOTICS",
                          FoundIn: [
                            {
                              SectionType: "SKILLS",
                            },
                            {
                              SectionType: "WORK HISTORY",
                              Id: "POS-3",
                            },
                          ],
                          ExistsInText: true,
                          MonthsExperience: {
                            Value: 4,
                          },
                          LastUsed: {
                            Value: "2018-07-31",
                          },
                        },
                      ],
                      MonthsExperience: {
                        Value: 4,
                      },
                      LastUsed: {
                        Value: "2018-07-31",
                      },
                      ChildrenMonthsExperience: {
                        Value: 4,
                      },
                      ChildrenLastUsed: {
                        Value: "2018-07-31",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      Associations: [
        {
          Organization:
            "Rocket from scratch and launched from a farm in Georgia, as member of Rocket Club at Georgia Tech",
          Role: "member",
        },
      ],
      LanguageCompetencies: [
        {
          Language: "English",
          LanguageCode: "en",
          FoundInContext: "[RESUME_LANGUAGE]",
        },
      ],
      Achievements: [
        "ACM ICPC Regionals: ACM ICPC Regionals 2013 Programming contest held in Amritapuri India --Our Team",
        "ranked #30 out of 300+ National level competing teams",
        "Top 1 percentile in National Level Engineering Entrance examination: Secured All India Rank #4120 out of 2",
        "Million* students (<0.1 Percentile) taking the Indian National Level Engineering Entrance examination",
        "Designed, built and Launch High power Rocket: Learnt to design, fabricate and Build High Power (NAR L1/L2)",
        "Rocket from scratch and launched from a farm in Georgia, as member of Rocket Club at Georgia Tech",
      ],
      QualificationsSummary:
        "Programming Skills\n• Scripting Languages: Python, C++ (Intermediate, >4000 Lines of Code)\n\n• Web Development: Frontend: Javascript, React.js, Bootstrap (Intermediate, >3000 LOC) Backend: Ruby\non Rails (Intermediate, >4000 LOC), Flask, REST APIs\n\n• Machine Learning / Computer Vision: scikit-learn, numpy, matplotlib, pandas, PyTorch (Intermediate,\n>2000 Lines of Code each)\n\n• Databases: MySQL, MongoDB\n\nCourses Competed\n• Graduate: Deep Learning, Computer Vision, Artificial Intelligence for Robotics, Reinforcement Learning,\nMachine Learning for Trading, Human Computer Interaction, Knowledge Based Artificial Intelligence,\nMachine Learning\n\n• Undergraduate: Algorithms and Datastructures, Database Management Systems, Operating Systems, Web\nTechnology.",
      ResumeMetadata: {
        FoundSections: [
          {
            FirstLineNumber: 2,
            LastLineNumber: 8,
            SectionType: "EDUCATION",
            HeaderTextFound: "Education",
          },
          {
            FirstLineNumber: 9,
            LastLineNumber: 56,
            SectionType: "WORK HISTORY",
            HeaderTextFound: "Experience",
          },
          {
            FirstLineNumber: 57,
            LastLineNumber: 78,
            SectionType: "PROJECT_HEADERS",
            HeaderTextFound: "Projects",
          },
          {
            FirstLineNumber: 79,
            LastLineNumber: 86,
            SectionType: "PERSONAL INTERESTS AND ACCOMPLISHMENTS",
            HeaderTextFound: "Achievements",
          },
          {
            FirstLineNumber: 87,
            LastLineNumber: 104,
            SectionType: "SKILLS",
            HeaderTextFound: "Programming Skills",
          },
        ],
        ResumeQuality: [
          {
            Level: "Data Missing",
            Findings: [
              {
                QualityCode: "213",
                Message:
                  "A street level address was not found in the contact information. A full contact address should always be included in a resume as it allows for location based searches.",
              },
            ],
          },
          {
            Level: "Suggested Improvements",
            Findings: [
              {
                QualityCode: "112",
                Message:
                  "The following section was identified as a skills section type: 'Programming Skills'. Skills should not be in a separate section, but instead, each skill should be included in the descriptions of work history or education.",
              },
            ],
          },
        ],
        PlainText:
          '   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  \n   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  / LinkedIn Github Quora Medium\t   ~~~~~~~~~~~~~~~  \nEducation\nGeorgia Institute of Technology\tAtlanta, Georgia, USA\n• Masters of Science in Computer Science;\tAug. 2017 - May. 2019\nSpecialization in Machine Learning\nNational Institute of Technology\tTiruchirapalli, India\n• Bachelors of Technology in Computer Science and Engineering\tAug. 2010 - June. 2014\n\nExperience\nGraduate Teaching Assistant\tAtlanta, Georgia\n• Georgia Institute of Technology\tJan 2019 - April 2019\n\nDeep Learning CS7643: Assisted Professor Zsolt Kira in conducting the course Deep Learning\nGraduate Research Assistant\tAtlanta, Georgia\n• Georgia Institute of Technology\tAug 2018 - Dec 2018\n\n: Worked on Research project under Professor James Tsai Transportation Lab - Evaluation of Object detection of\nTra c infrastructure using Registration and Fusion of 2D Camera and 3D LIDAR Point cloud Data.\nInvento Robotics\tBangalore, India\n• AI Application Developer for Humanoid Robot Company\tApr 2018 - July 2018 (4 months)\n\nO✏ine Conversation: Developed O✏ine Natural Language Understanding and Conversation Capability for a\nHumanoid Robot Mitra to understand context and Respond to users. Developed using RASA framework\n(Entity-Intent based). Setup the above as Alexa Skills for Guest registration and Movie recommendation using\nLambda Function. Developed web interface for testing Speech Conversation flows.\nEarly-stage growing Robotics AI Startup experience: worked directly under CEO Mr.Balaji Vishwanathan\n#1 followed Top-writer in Quora\nGroupon\tPalo Alto, CA\n• Software Development Engineer (Full Stack Developer)\tApril 2016 - June 2017 (1.2 years)\n\nMerchant Tools: Co-owner to develop a mobile-friendly web-application in AngularJS for creating Card Linked\nO↵ers used by 1500+ Sales Representatives and Merchants to create Groupon Deals.\nAPI Services: Owner for managing Contract Service and Fine Print API service. Automated the manual\nContract-signing process by integrating with DocuSign API, saving Groupon atleast $40,000 per month.\nTransitioned the FinePrint Service workflow from reading from static Google Spreadsheet to consume from\nupstream services dynamically through API integrations.\nSelf Service workflows: Implemented features and updates like Redemption Window, Blackout Dates, Fine\nPrints, Groupon Delivery and Takeout to support Merchant Self-service to create various Deal types and workflows.\n\nDeployments: Point of contact for Deployments for di↵erent Merchant Tools and services like Fine Print Service,\nContract Service, Self-service Backend Service, etc. Created Splunk dashboards for visualisation and Nagios alerts\nwhen metrics exceed thresholds.\nGroupon\tChennai, India\n• Software Development Engineer (Full Stack Developer)\tJune 2014 - April 2016 (2 years)\n\nDeal Creation Tool: Worked on Product features for the Deal Creation Tool used by Sales representatives to\ncreate di↵erent kinds of Deals. Transferred to Groupon, Palo Alto, California based on consistent performance.\nImage Asset Management: Developed features like Keyword Metadata management, Internationalization,\nAttribution for the Image Asset Management Tool used for managing Images used at Groupon.\nTDD Automated Testing: Followed TDD Automated Testing with Karma, Jasmine, Mocha.\nDefence Avionics Research Establishment\tBangalore, India\n• Intern\tMay 2012 - June 2012 (2 months)\n\nSecurity Testing and Analysis: Analysed Network security against attacks at Defence Organisation in their\ninternal networks and websites for vulnerabilities like SQL Injection, XSS Scripting, DDOS attack, and submitted a\nreport recommending 2 fixes.\nProjects\n• Computer Vision: 1. Implemented Image Convolution and generated Hybrid images. 2. Local feature matching\nbetween two images. 3. Implemented Scene Recognition with Bag of Words. 4. Implemented Face Detection with a\nSliding Window. 5. Deep CNN for scene recognition [Source]\n• Deep Learning: 1. Image Style transfer using CNN. 2. ConvNet on CIFAR-10 3. Image Captioning with LSTMs and\nRNNs.\n• Machine Learning: 1. Implemented Supervised and Unsupervised Learning algorithms using scikit-learn. 2. Used\nclustering (k-means, EM) and dimensionality reduction (PCA, ICA) to pre-process the data to train neural networks. 3.\nUsed Reinforcement Learning algorithms to navigate Grid world.\n• Machine Learning for Trading: Built a Market Simulator, Applied Machine Learning and Reinforcement Learning\n(Q-Learning) to past Stock data to compare and evaluate stock prediction accuracy. [Source]\n• Human-Robot Interaction: Analysed Human-Robot Interaction of Humanoid Robot acting as a Waiter in a\nRestaurant following HCI Design Cycle. [Report]\n• Augmented Reality: AR Mobile application Kasadara for school students to augment textbook images while learning.\nUsing Unity and C# [Details] [Demo]\n• Knowledge Based AI IQ solving Bot: Built an AI bot to solve Raven\'s Progressive Matrices Questions (IQ\nmeasurement test) using Case Based Reasoning approach - Fractal and A ne methods using Knowledge-Based Artificial\nIntelligence.\n• Virtual Reality application: Developed 360-degree Virtual Reality mobile application "DejaVu" during a Hackathon\nfor users to experience di↵erent Deal types like Hotels, Restaurants, Events in Google Cardboard VR as a Proof of\nConcept. [Demo]\n\nAchievements\n• ACM ICPC Regionals: ACM ICPC Regionals 2013 Programming contest held in Amritapuri India --Our Team\nranked #30 out of 300+ National level competing teams.\n• Top 1 percentile in National Level Engineering Entrance examination: Secured All India Rank #4120 out of 2\n*Million* students (<0.1 Percentile) taking the Indian National Level Engineering Entrance examination.\n• Designed, built and Launch High power Rocket: Learnt to design, fabricate and Build High Power (NAR L1/L2)\nRocket from scratch and launched from a farm in Georgia, as member of Rocket Club at Georgia Tech.\n\nProgramming Skills\n• Scripting Languages: Python, C++ (Intermediate, >4000 Lines of Code)\n\n• Web Development: Frontend: Javascript, React.js, Bootstrap (Intermediate, >3000 LOC) Backend: Ruby\non Rails (Intermediate, >4000 LOC), Flask, REST APIs\n\n• Machine Learning / Computer Vision: scikit-learn, numpy, matplotlib, pandas, PyTorch (Intermediate,\n>2000 Lines of Code each)\n\n• Databases: MySQL, MongoDB\n\nCourses Competed\n• Graduate: Deep Learning, Computer Vision, Artificial Intelligence for Robotics, Reinforcement Learning,\nMachine Learning for Trading, Human Computer Interaction, Knowledge Based Artificial Intelligence,\nMachine Learning\n\n• Undergraduate: Algorithms and Datastructures, Database Management Systems, Operating Systems, Web\nTechnology.',
        DocumentLanguage: "en",
        DocumentCulture: "en-US",
        ParserSettings:
          "Coverage.MilitaryHistoryAndSecurityCredentials = True; Coverage.PatentsPublicationsAndSpeakingEvents = True; Coverage.PersonalAttributes = True; Coverage.Training = True; Culture.CountryCodeForUnitedKingdomIsUK = True; Culture.DefaultCountryCode = US; Culture.Language = English; Culture.PreferEnglishVersionIfTwoLanguagesInDocument = False; Data.UserDefinedParsing = False; OutputFormat.AssumeCompanyNameFromPrecedingJob = False; OutputFormat.ContactMethod.PackStyle = Split; OutputFormat.DateOutputStyle = ExplicitlyKnownDateInfoOnly; OutputFormat.NestJobsBasedOnDateRanges = True; OutputFormat.NormalizeRegions = False; OutputFormat.SkillsStyle = Default; OutputFormat.StripParsedDataFromPositionHistoryDescription = True; OutputFormat.TelcomNumber.Style = Raw; OutputFormat.XmlFormat = HrXmlResume25",
        DocumentLastModified: "2019-09-10",
        SovrenSignature: ["Yfn///////8="],
      },
    },
    ConversionMetadata: {
      DetectedType: "Pdf",
      SuggestedFileExtension: "pdf",
      OutputValidityCode: "ovIsProbablyValid",
      ElapsedMilliseconds: 781,
    },
    //         "Conversions": {
    //             "HTML": "\n\n\t\n\t\t\n\t\t\n\t\t\n\t\n\n\t\n\t\t
    // \n\t\t\t
    // \n\t\t\t\t\"\\n\t\t\t
    // \n\t\t\t
    // \n\t\t\t\t
    // \n\t\t\t\t\t
    // Sreenivasan AC
    // \n\t\t\t\t\t
    // https: //www.linkedin.com/in/sreenivasan-ac/ LinkedIn Github Quora Medium
    // \n\t\t\t\t\t
    // Email : sreenivasan.nitt@gmail.com
    // \n\t\t\t\t\t
    // Mobile : 404-663-9270
    // \n\t\t\t\t\t
    // Education
    // \n\t\t\t\t\t
    // Georgia Institute of Technology
    // \n\t\t\t\t\t
    // Masters of Science in Computer Science;
    // \n\t\t\t\t\t
    // Specialization in Machine Learning
    // \n\t\t\t\t\t
    // Atlanta, Georgia, USA
    // \n\t\t\t\t\t
    // Aug. 2017 – May. 2019
    // \n\t\t\t\t\t
    // •
    // \n\t\t\t\t\t
    // National Institute of Technology
    // \n\t\t\t\t\t
    // Bachelors of Technology in Computer Science and Engineering
    // \n\t\t\t\t\t
    // Tiruchirapalli, India
    // \n\t\t\t\t\t
    // Aug. 2010 – June. 2014
    // \n\t\t\t\t\t
    // •
    // \n\t\t\t\t\t
    // Experience
    // \n\t\t\t\t\t
    // Graduate Teaching Assistant
    // \n\t\t\t\t\t
    // Georgia Institute of Technology
    // \n\t\t\t\t\t
    // Atlanta, Georgia
    // \n\t\t\t\t\t
    // Jan 2019 - April 2019
    // \n\t\t\t\t\t
    // •
    // \n\t\t\t\t\t
    // ꢀ Deep Learning CS7643: Assisted Professor Zsolt Kira in conducting the course Deep Learning
    // \n\t\t\t\t\t
    // Graduate Research Assistant
    // \n\t\t\t\t\t
    // Georgia Institute of Technology
    // \n\t\t\t\t\t
    // Atlanta, Georgia
    // \n\t\t\t\t\t
    // Aug 2018 - Dec 2018
    // \n\t\t\t\t\t
    // •
    // \n\t\t\t\t\t
    // •
    // \n\t\t\t\t\t
    // ꢀ : Worked on Research project under Professor James Tsai Transportation Lab - Evaluation of Object detection of
    // \n\t\t\t\t\t
    // Traꢀc infrastructure using Registration and Fusion of 2D Camera and 3D LIDAR Point cloud Data.
    // \n\t\t\t\t\t
    // Invento Robotics
    // \n\t\t\t\t\t
    // AI Application Developer for Humanoid Robot Company
    // \n\t\t\t\t\t
    // Bangalore, India
    // \n\t\t\t\t\t
    // Apr 2018 - July 2018 (4 months)
    // \n\t\t\t\t\t
    // ꢀ O✏ine Conversation: Developed O✏ine Natural Language Understanding and Conversation Capability for a
    // \n\t\t\t\t\t
    // Humanoid Robot Mitra to understand context and Respond to users. Developed using RASA framework
    // \n\t\t\t\t\t
    // (Entity-Intent based). Setup the above as Alexa Skills for Guest registration and Movie recommendation using
    // \n\t\t\t\t\t
    // Lambda Function. Developed web interface for testing Speech Conversation flows.
    // \n\t\t\t\t\t
    // ꢀ Early-stage growing Robotics AI Startup experience: worked directly under CEO Mr.Balaji Vishwanathan
    // \n\t\t\t\t\t
    // #1 followed Top-writer in Quora
    // \n\t\t\t\t\t
    // Groupon
    // \n\t\t\t\t\t
    // Palo Alto, CA
    // \n\t\t\t\t\t
    // April 2016 - June 2017 (1.2 years)
    // \n\t\t\t\t\t
    // •
    // \n\t\t\t\t\t
    // Software Development Engineer (Full Stack Developer)
    // \n\t\t\t\t\t
    // ꢀ Merchant Tools: Co-owner to develop a mobile-friendly web-application in AngularJS for creating Card Linked
    // \n\t\t\t\t\t
    // O↵ers used by 1500+ Sales Representatives and Merchants to create Groupon Deals.
    // \n\t\t\t\t\t
    // ꢀ API Services: Owner for managing Contract Service and Fine Print API service. Automated the manual
    // \n\t\t\t\t\t
    // Contract-signing process by integrating with DocuSign API, saving Groupon atleast $40,
    //             000 per month.
    // \n\t\t\t\t\t
    // Transitioned the FinePrint Service workflow from reading from static Google Spreadsheet to consume from
    // \n\t\t\t\t\t
    // upstream services dynamically through API integrations.
    // \n\t\t\t\t\t
    // ꢀ Self Service workflows: Implemented features and updates like Redemption Window, Blackout Dates, Fine
    // \n\t\t\t\t\t
    // Prints, Groupon Delivery and Takeout to support Merchant Self-service to create various Deal types and workflows.
    // \n\t\t\t\t\t
    // ꢀ Deployments: Point of contact for Deployments for di↵erent Merchant Tools and services like Fine Print Service,
    // \n\t\t\t\t\t
    // Contract Service, Self-service Backend Service, etc. Created Splunk dashboards for visualisation and Nagios alerts
    // \n\t\t\t\t\t
    // when metrics exceed thresholds.
    // \n\t\t\t\t\t
    // Groupon
    // \n\t\t\t\t\t
    // Chennai, India
    // \n\t\t\t\t\t
    // June 2014 - April 2016 (2 years)
    // \n\t\t\t\t\t
    // •
    // \n\t\t\t\t\t
    // •
    // \n\t\t\t\t\t
    // Software Development Engineer (Full Stack Developer)
    // \n\t\t\t\t\t
    // ꢀ Deal Creation Tool: Worked on Product features for the Deal Creation Tool used by Sales representatives to
    // \n\t\t\t\t\t
    // create di↵erent kinds of Deals. Transferred to Groupon, Palo Alto, California based on consistent performance.
    // \n\t\t\t\t\t
    // ꢀ Image Asset Management: Developed features like Keyword Metadata management, Internationalization,
    // \n\t\t\t\t\t
    // Attribution for the Image Asset Management Tool used for managing Images used at Groupon.
    // \n\t\t\t\t\t
    // ꢀ TDD Automated Testing: Followed TDD Automated Testing with Karma, Jasmine, Mocha.
    // \n\t\t\t\t\t
    // Defence Avionics Research Establishment
    // \n\t\t\t\t\t
    // Intern
    // \n\t\t\t\t\t
    // Bangalore, India
    // \n\t\t\t\t\t
    // May 2012 - June 2012 (2 months)
    // \n\t\t\t\t\t
    // ꢀ Security Testing and Analysis: Analysed Network security against attacks at Defence Organisation in their
    // \n\t\t\t\t\t
    // internal networks and websites for vulnerabilities like SQL Injection, XSS Scripting, DDOS attack, and submitted a
    // \n\t\t\t\t\t
    // report recommending 2 fixes.
    // \n\t\t\t\t
    // \n\t\t\t
    // \n\t\t
    // \n\t\t
    // \n\t\t\t
    // \n\t\t\t\t\"\\n\t\t\t
    // \n\t\t\t
    // \n\t\t\t\t
    // \n\t\t\t\t\t
    // Projects
    // \n\t\t\t\t\t
    // • Computer Vision: 1. Implemented Image Convolution and generated Hybrid images. 2. Local feature matching
    // \n\t\t\t\t\t
    // between two images. 3. Implemented Scene Recognition with Bag of Words. 4. Implemented Face Detection with a
    // \n\t\t\t\t\t
    // Sliding Window. 5. Deep CNN for scene recognition [Source
    //             ]
    // \n\t\t\t\t\t
    // • Deep Learning: 1. Image Style transfer using CNN. 2. ConvNet on CIFAR-10 3. Image Captioning with LSTMs and
    // \n\t\t\t\t\t
    // RNNs.
    // \n\t\t\t\t\t
    // • Machine Learning: 1. Implemented Supervised and Unsupervised Learning algorithms using scikit-learn. 2. Used
    // \n\t\t\t\t\t
    // clustering (k-means, EM) and dimensionality reduction (PCA, ICA) to pre-process the data to train neural networks. 3.
    // \n\t\t\t\t\t
    // Used Reinforcement Learning algorithms to navigate Grid world.
    // \n\t\t\t\t\t
    // • Machine Learning for Trading: Built a Market Simulator, Applied Machine Learning and Reinforcement Learning
    // \n\t\t\t\t\t
    // (Q-Learning) to past Stock data to compare and evaluate stock prediction accuracy. [Source
    //             ]
    // \n\t\t\t\t\t
    // • Human-Robot Interaction: Analysed Human-Robot Interaction of Humanoid Robot acting as a Waiter in a
    // \n\t\t\t\t\t
    // Restaurant following HCI Design Cycle. [Report
    //             ]
    // \n\t\t\t\t\t
    // • Augmented Reality: AR Mobile application Kasadara for school students to augment textbook images while learning.
    // \n\t\t\t\t\t
    // Using Unity and C# [Details
    //             ] [Demo
    //             ]
    // \n\t\t\t\t\t
    // • Knowledge Based AI IQ solving Bot: Built an AI bot to solve Raven’s Progressive Matrices Questions (IQ
    // \n\t\t\t\t\t
    // measurement test) using Case Based Reasoning approach - Fractal and Aꢀne methods using Knowledge-Based Artificial
    // \n\t\t\t\t\t
    // Intelligence.
    // \n\t\t\t\t\t
    // • Virtual Reality application: Developed 360-degree Virtual Reality mobile application ”DejaVu” during a Hackathon
    // \n\t\t\t\t\t
    // for users to experience di↵erent Deal types like Hotels, Restaurants, Events in Google Cardboard VR as a Proof of
    // \n\t\t\t\t\t
    // Concept. [Demo
    //             ]
    // \n\t\t\t\t\t
    // Achievements
    // \n\t\t\t\t\t
    // • ACM ICPC Regionals: ACM ICPC Regionals 2013 Programming contest held in Amritapuri India —Our Team
    // \n\t\t\t\t\t
    // ranked #30 out of 300+ National level competing teams.
    // \n\t\t\t\t\t
    // • Top 1 percentile in National Level Engineering Entrance examination: Secured All India Rank #4120 out of 2
    // \n\t\t\t\t\t
    // *Million* students (<0.1 Percentile) taking the Indian National Level Engineering Entrance examination.
    // \n\t\t\t\t\t
    // • Designed, built and Launch High power Rocket: Learnt to design, fabricate and Build High Power (NAR L1/L2)
    // \n\t\t\t\t\t
    // Rocket from scratch and launched from a farm in Georgia, as member of Rocket Club at Georgia Tech.
    // \n\t\t\t\t\t
    // Programming Skills
    // \n\t\t\t\t\t
    // • Scripting Languages: Python, C++ (Intermediate, >4000 Lines of Code)
    // \n\t\t\t\t\t
    // • Web Development: Frontend: Javascript, React.js, Bootstrap (Intermediate, >3000 LOC) Backend: Ruby
    // \n\t\t\t\t\t
    // on Rails (Intermediate, >4000 LOC), Flask, REST APIs
    // \n\t\t\t\t\t
    // • Machine Learning / Computer Vision: scikit-learn, numpy, matplotlib, pandas, PyTorch (Intermediate,
    // \n\t\t\t\t\t
    // >2000 Lines of Code each)
    // \n\t\t\t\t\t
    // • Databases: MySQL, MongoDB
    // \n\t\t\t\t\t
    // Courses Competed
    // \n\t\t\t\t\t
    // • Graduate: Deep Learning, Computer Vision, Artificial Intelligence for Robotics, Reinforcement Learning,
    // \n\t\t\t\t\t
    // Machine Learning for Trading, Human Computer Interaction, Knowledge Based Artificial Intelligence,
    // \n\t\t\t\t\t
    // Machine Learning
    // \n\t\t\t\t\t
    // • Undergraduate: Algorithms and Datastructures, Database Management Systems, Operating Systems, Web
    // \n\t\t\t\t\t
    // Technology.
    // \n\t\t\t\t
    // \n\t\t\t
    // \n\t\t
    // \n\t\n\n"
    //         },
    ParsingMetadata: {
      ElapsedMilliseconds: 499,
      TimedOut: false,
    },
  },
};
