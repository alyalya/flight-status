import React, { Component } from 'react';
// import Arrivals from './components/arrivals/arrivals.js';
import Table from './components/table/table.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.filterDepartures = this.filterDepartures.bind(this);
        this.filterArrivals = this.filterArrivals.bind(this);
        this.filterCancelled = this.filterCancelled.bind(this);
        this.searchFlights = this.searchFlights.bind(this);    

        this.data = {
            data: [{ 
                "type": "arrival", 
                "status": "cancelled", 
                "departure": { 
                    "iataCode": "JFK", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-12-11T01:06:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-12-11T03:38:00.000", 
                    "actualRunway": "2017-12-11T03:38:00.000" 
                }, 
                "airline": { 
                    "name": "Atlas Air", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                }, 
                "flight": { 
                    "number": "302", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                }
              },
              { 
                "type": "departure", 
                "status": "landed", 
                "departure": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-12-11T01:06:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "CVG", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-12-11T03:38:00.000", 
                    "actualRunway": "2017-12-11T03:38:00.000" 
                    }, 
                "airline": { 
                    "name": "Atlas Air", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                    }, 
                "flight": { 
                    "number": "432302", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                    }
                },
              { 
                "type": "arrival", 
                "status": "landed", 
                "departure": { 
                    "iataCode": "ULY", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-13-11T01:08:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-03-11T06:30:00.000", 
                    "actualRunway": "2017-12-11T03:38:00.000" 
                }, 
                "airline": { 
                    "name": "Gatlas Gir", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                }, 
                "flight": { 
                    "number": "354602", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                }
              },
              { 
                "type": "departure", 
                "status": "cancelled", 
                "departure": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-12-11T01:06:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "CVG", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-12-11T03:38:00.000", 
                    "actualRunway": "2017-12-11T03:38:00.000" 
                    }, 
                "airline": { 
                    "name": "Atlas Air", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                    }, 
                "flight": { 
                    "number": "432302", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                    }
                },
              { 
                "type": "arrival", 
                "status": "landed", 
                "departure": { 
                    "iataCode": "ULY", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-13-11T01:08:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-03-11T06:30:00.000", 
                    "actualRunway": "2017-12-11T03:38:00.000" 
                }, 
                "airline": { 
                    "name": "Gatlas Gir", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                }, 
                "flight": { 
                    "number": "354602", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                }
              },
              { 
                "type": "arrival", 
                "status": "cancelled", 
                "departure": { 
                    "iataCode": "ULY", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-13-11T01:08:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-03-11T06:30:00.000", 
                    "actualRunway": "2017-12-11T03:38:00.000" 
                }, 
                "airline": { 
                    "name": "Gatlas Gir", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                }, 
                "flight": { 
                    "number": "354602", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                }
              },
              { 
                "type": "departure", 
                "status": "landed", 
                "departure": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-12-11T01:06:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "CVG", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-12-11T03:38:00.000", 
                    "actualRunway": "2017-12-11T03:38:00.000" 
                    }, 
                "airline": { 
                    "name": "Atlas Air", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                    }, 
                "flight": { 
                    "number": "432302", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                    }
                },
                { 
                "type": "departure", 
                "status": "cancelled", 
                "departure": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-12-11T01:06:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "JFK", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-12-11T03:38:00.000", 
                    "actualRunway": "2018-11-11T03:38:00.000" 
                    }, 
                "airline": { 
                    "name": "AtlGHghas Air", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                    }, 
                "flight": { 
                    "number": "30dfs2", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                    }
                },
                { 
                  "type": "arrival", 
                  "status": "cancelled", 
                  "departure": { 
                      "iataCode": "JFK", 
                      "icaoCode": "KJFK", 
                      "scheduledTime": "2017-12-11T01:06:00.000", 
                      "estimatedRunway": "2017-12-11T02:07:00.000", 
                      "actualRunway": "2017-12-11T02:07:00.000" }, 
                  "arrival": { 
                      "iataCode": "VKO", 
                      "icaoCode": "KCVG", 
                      "estimatedRunway": "2017-12-11T03:38:00.000", 
                      "actualRunway": "2017-12-11T03:38:00.000" 
                  }, 
                  "airline": { 
                      "name": "Atlas Air", 
                      "iataCode": "5Y", 
                      "icaoCode": "GTI" 
                  }, 
                  "flight": { 
                      "number": "302", 
                      "iataNumber": "5Y302", 
                      "icaoNumber": "GTI302" 
                  }
                },
                { 
                  "type": "departure", 
                  "status": "landed", 
                  "departure": { 
                      "iataCode": "VKO", 
                      "icaoCode": "KJFK", 
                      "scheduledTime": "2017-12-11T01:06:00.000", 
                      "estimatedRunway": "2017-12-11T02:07:00.000", 
                      "actualRunway": "2017-12-11T02:07:00.000" }, 
                  "arrival": { 
                      "iataCode": "CVG", 
                      "icaoCode": "KCVG", 
                      "estimatedRunway": "2017-12-11T03:38:00.000", 
                      "actualRunway": "2017-12-11T03:38:00.000" 
                      }, 
                  "airline": { 
                      "name": "Atlas Air", 
                      "iataCode": "5Y", 
                      "icaoCode": "GTI" 
                      }, 
                  "flight": { 
                      "number": "432302", 
                      "iataNumber": "5Y302", 
                      "icaoNumber": "GTI302" 
                      }
                  },
                { 
                  "type": "arrival", 
                  "status": "landed", 
                  "departure": { 
                      "iataCode": "ULY", 
                      "icaoCode": "KJFK", 
                      "scheduledTime": "2017-13-11T01:08:00.000", 
                      "estimatedRunway": "2017-12-11T02:07:00.000", 
                      "actualRunway": "2017-12-11T02:07:00.000" }, 
                  "arrival": { 
                      "iataCode": "VKO", 
                      "icaoCode": "KCVG", 
                      "estimatedRunway": "2017-03-11T06:30:00.000", 
                      "actualRunway": "2017-12-11T03:38:00.000" 
                  }, 
                  "airline": { 
                      "name": "Gatlas Gir", 
                      "iataCode": "5Y", 
                      "icaoCode": "GTI" 
                  }, 
                  "flight": { 
                      "number": "354602", 
                      "iataNumber": "5Y302", 
                      "icaoNumber": "GTI302" 
                  }
                },
                { 
                  "type": "departure", 
                  "status": "cancelled", 
                  "departure": { 
                      "iataCode": "VKO", 
                      "icaoCode": "KJFK", 
                      "scheduledTime": "2017-12-11T01:06:00.000", 
                      "estimatedRunway": "2017-12-11T02:07:00.000", 
                      "actualRunway": "2017-12-11T02:07:00.000" }, 
                  "arrival": { 
                      "iataCode": "CVG", 
                      "icaoCode": "KCVG", 
                      "estimatedRunway": "2017-12-11T03:38:00.000", 
                      "actualRunway": "2017-12-11T03:38:00.000" 
                      }, 
                  "airline": { 
                      "name": "Atlas Air", 
                      "iataCode": "5Y", 
                      "icaoCode": "GTI" 
                      }, 
                  "flight": { 
                      "number": "432302", 
                      "iataNumber": "5Y302", 
                      "icaoNumber": "GTI302" 
                      }
                  },
                { 
                  "type": "arrival", 
                  "status": "landed", 
                  "departure": { 
                      "iataCode": "ULY", 
                      "icaoCode": "KJFK", 
                      "scheduledTime": "2017-13-11T01:08:00.000", 
                      "estimatedRunway": "2017-12-11T02:07:00.000", 
                      "actualRunway": "2017-12-11T02:07:00.000" }, 
                  "arrival": { 
                      "iataCode": "VKO", 
                      "icaoCode": "KCVG", 
                      "estimatedRunway": "2017-03-11T06:30:00.000", 
                      "actualRunway": "2017-12-11T03:38:00.000" 
                  }, 
                  "airline": { 
                      "name": "Gatlas Gir", 
                      "iataCode": "5Y", 
                      "icaoCode": "GTI" 
                  }, 
                  "flight": { 
                      "number": "354602", 
                      "iataNumber": "5Y302", 
                      "icaoNumber": "GTI302" 
                  }
                },
                { 
                  "type": "arrival", 
                  "status": "cancelled", 
                  "departure": { 
                      "iataCode": "ULY", 
                      "icaoCode": "KJFK", 
                      "scheduledTime": "2017-13-11T01:08:00.000", 
                      "estimatedRunway": "2017-12-11T02:07:00.000", 
                      "actualRunway": "2017-12-11T02:07:00.000" }, 
                  "arrival": { 
                      "iataCode": "VKO", 
                      "icaoCode": "KCVG", 
                      "estimatedRunway": "2017-03-11T06:30:00.000", 
                      "actualRunway": "2017-12-11T03:38:00.000" 
                  }, 
                  "airline": { 
                      "name": "Gatlas Gir", 
                      "iataCode": "5Y", 
                      "icaoCode": "GTI" 
                  }, 
                  "flight": { 
                      "number": "354602", 
                      "iataNumber": "5Y302", 
                      "icaoNumber": "GTI302" 
                  }
                },
                { 
                  "type": "departure", 
                  "status": "landed", 
                  "departure": { 
                      "iataCode": "VKO", 
                      "icaoCode": "KJFK", 
                      "scheduledTime": "2017-12-11T01:06:00.000", 
                      "estimatedRunway": "2017-12-11T02:07:00.000", 
                      "actualRunway": "2017-12-11T02:07:00.000" }, 
                  "arrival": { 
                      "iataCode": "CVG", 
                      "icaoCode": "KCVG", 
                      "estimatedRunway": "2017-12-11T03:38:00.000", 
                      "actualRunway": "2017-12-11T03:38:00.000" 
                      }, 
                  "airline": { 
                      "name": "Atlas Air", 
                      "iataCode": "5Y", 
                      "icaoCode": "GTI" 
                      }, 
                  "flight": { 
                      "number": "432302", 
                      "iataNumber": "5Y302", 
                      "icaoNumber": "GTI302" 
                      }
                  },
                  { 
                  "type": "departure", 
                  "status": "cancelled", 
                  "departure": { 
                      "iataCode": "VKO", 
                      "icaoCode": "KJFK", 
                      "scheduledTime": "2017-12-11T01:06:00.000", 
                      "estimatedRunway": "2017-12-11T02:07:00.000", 
                      "actualRunway": "2017-12-11T02:07:00.000" }, 
                  "arrival": { 
                      "iataCode": "JFK", 
                      "icaoCode": "KCVG", 
                      "estimatedRunway": "2017-12-11T03:38:00.000", 
                      "actualRunway": "2018-11-11T03:38:00.000" 
                      }, 
                  "airline": { 
                      "name": "AtlGHghas Air", 
                      "iataCode": "5Y", 
                      "icaoCode": "GTI" 
                      }, 
                  "flight": { 
                      "number": "30dfs2", 
                      "iataNumber": "5Y302", 
                      "icaoNumber": "GTI302" 
                      }
                  }
            ]
        }

        this.state = {
          data: [{ 
              "type": "arrival", 
              "status": "cancelled", 
              "departure": { 
                  "iataCode": "JFK", 
                  "icaoCode": "KJFK", 
                  "scheduledTime": "2017-12-11T01:06:00.000", 
                  "estimatedRunway": "2017-12-11T02:07:00.000", 
                  "actualRunway": "2017-12-11T02:07:00.000" }, 
              "arrival": { 
                  "iataCode": "VKO", 
                  "icaoCode": "KCVG", 
                  "estimatedRunway": "2017-12-11T03:38:00.000", 
                  "actualRunway": "2017-12-11T03:38:00.000" 
              }, 
              "airline": { 
                  "name": "Atlas Air", 
                  "iataCode": "5Y", 
                  "icaoCode": "GTI" 
              }, 
              "flight": { 
                  "number": "302", 
                  "iataNumber": "5Y302", 
                  "icaoNumber": "GTI302" 
              }
            },
            { 
              "type": "departure", 
              "status": "landed", 
              "departure": { 
                  "iataCode": "VKO", 
                  "icaoCode": "KJFK", 
                  "scheduledTime": "2017-12-11T01:06:00.000", 
                  "estimatedRunway": "2017-12-11T02:07:00.000", 
                  "actualRunway": "2017-12-11T02:07:00.000" }, 
              "arrival": { 
                  "iataCode": "CVG", 
                  "icaoCode": "KCVG", 
                  "estimatedRunway": "2017-12-11T03:38:00.000", 
                  "actualRunway": "2017-12-11T03:38:00.000" 
                  }, 
              "airline": { 
                  "name": "Atlas Air", 
                  "iataCode": "5Y", 
                  "icaoCode": "GTI" 
                  }, 
              "flight": { 
                  "number": "432302", 
                  "iataNumber": "5Y302", 
                  "icaoNumber": "GTI302" 
                  }
              },
            { 
              "type": "arrival", 
              "status": "landed", 
              "departure": { 
                  "iataCode": "ULY", 
                  "icaoCode": "KJFK", 
                  "scheduledTime": "2017-13-11T01:08:00.000", 
                  "estimatedRunway": "2017-12-11T02:07:00.000", 
                  "actualRunway": "2017-12-11T02:07:00.000" }, 
              "arrival": { 
                  "iataCode": "VKO", 
                  "icaoCode": "KCVG", 
                  "estimatedRunway": "2017-03-11T06:30:00.000", 
                  "actualRunway": "2017-12-11T03:38:00.000" 
              }, 
              "airline": { 
                  "name": "Gatlas Gir", 
                  "iataCode": "5Y", 
                  "icaoCode": "GTI" 
              }, 
              "flight": { 
                  "number": "354602", 
                  "iataNumber": "5Y302", 
                  "icaoNumber": "GTI302" 
              }
            },
            { 
              "type": "departure", 
              "status": "cancelled", 
              "departure": { 
                  "iataCode": "VKO", 
                  "icaoCode": "KJFK", 
                  "scheduledTime": "2017-12-11T01:06:00.000", 
                  "estimatedRunway": "2017-12-11T02:07:00.000", 
                  "actualRunway": "2017-12-11T02:07:00.000" }, 
              "arrival": { 
                  "iataCode": "CVG", 
                  "icaoCode": "KCVG", 
                  "estimatedRunway": "2017-12-11T03:38:00.000", 
                  "actualRunway": "2017-12-11T03:38:00.000" 
                  }, 
              "airline": { 
                  "name": "Atlas Air", 
                  "iataCode": "5Y", 
                  "icaoCode": "GTI" 
                  }, 
              "flight": { 
                  "number": "432302", 
                  "iataNumber": "5Y302", 
                  "icaoNumber": "GTI302" 
                  }
              },
            { 
              "type": "arrival", 
              "status": "landed", 
              "departure": { 
                  "iataCode": "ULY", 
                  "icaoCode": "KJFK", 
                  "scheduledTime": "2017-13-11T01:08:00.000", 
                  "estimatedRunway": "2017-12-11T02:07:00.000", 
                  "actualRunway": "2017-12-11T02:07:00.000" }, 
              "arrival": { 
                  "iataCode": "VKO", 
                  "icaoCode": "KCVG", 
                  "estimatedRunway": "2017-03-11T06:30:00.000", 
                  "actualRunway": "2017-12-11T03:38:00.000" 
              }, 
              "airline": { 
                  "name": "Gatlas Gir", 
                  "iataCode": "5Y", 
                  "icaoCode": "GTI" 
              }, 
              "flight": { 
                  "number": "354602", 
                  "iataNumber": "5Y302", 
                  "icaoNumber": "GTI302" 
              }
            },
            { 
              "type": "arrival", 
              "status": "cancelled", 
              "departure": { 
                  "iataCode": "ULY", 
                  "icaoCode": "KJFK", 
                  "scheduledTime": "2017-13-11T01:08:00.000", 
                  "estimatedRunway": "2017-12-11T02:07:00.000", 
                  "actualRunway": "2017-12-11T02:07:00.000" }, 
              "arrival": { 
                  "iataCode": "VKO", 
                  "icaoCode": "KCVG", 
                  "estimatedRunway": "2017-03-11T06:30:00.000", 
                  "actualRunway": "2017-12-11T03:38:00.000" 
              }, 
              "airline": { 
                  "name": "Gatlas Gir", 
                  "iataCode": "5Y", 
                  "icaoCode": "GTI" 
              }, 
              "flight": { 
                  "number": "354602", 
                  "iataNumber": "5Y302", 
                  "icaoNumber": "GTI302" 
              }
            },
            { 
              "type": "departure", 
              "status": "landed", 
              "departure": { 
                  "iataCode": "VKO", 
                  "icaoCode": "KJFK", 
                  "scheduledTime": "2017-12-11T01:06:00.000", 
                  "estimatedRunway": "2017-12-11T02:07:00.000", 
                  "actualRunway": "2017-12-11T02:07:00.000" }, 
              "arrival": { 
                  "iataCode": "CVG", 
                  "icaoCode": "KCVG", 
                  "estimatedRunway": "2017-12-11T03:38:00.000", 
                  "actualRunway": "2017-12-11T03:38:00.000" 
                  }, 
              "airline": { 
                  "name": "Atlas Air", 
                  "iataCode": "5Y", 
                  "icaoCode": "GTI" 
                  }, 
              "flight": { 
                  "number": "432302", 
                  "iataNumber": "5Y302", 
                  "icaoNumber": "GTI302" 
                  }
              },
              { 
              "type": "departure", 
              "status": "cancelled", 
              "departure": { 
                  "iataCode": "VKO", 
                  "icaoCode": "KJFK", 
                  "scheduledTime": "2017-12-11T01:06:00.000", 
                  "estimatedRunway": "2017-12-11T02:07:00.000", 
                  "actualRunway": "2017-12-11T02:07:00.000" }, 
              "arrival": { 
                  "iataCode": "JFK", 
                  "icaoCode": "KCVG", 
                  "estimatedRunway": "2017-12-11T03:38:00.000", 
                  "actualRunway": "2018-11-11T03:38:00.000" 
                  }, 
              "airline": { 
                  "name": "AtlGHghas Air", 
                  "iataCode": "5Y", 
                  "icaoCode": "GTI" 
                  }, 
              "flight": { 
                  "number": "30dfs2", 
                  "iataNumber": "5Y302", 
                  "icaoNumber": "GTI302" 
                  }
              },
              { 
                "type": "arrival", 
                "status": "cancelled", 
                "departure": { 
                    "iataCode": "JFK", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-12-11T01:06:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-12-11T03:38:00.000", 
                    "actualRunway": "2017-12-11T03:38:00.000" 
                }, 
                "airline": { 
                    "name": "Atlas Air", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                }, 
                "flight": { 
                    "number": "302", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                }
              },
              { 
                "type": "departure", 
                "status": "landed", 
                "departure": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-12-11T01:06:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "CVG", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-12-11T03:38:00.000", 
                    "actualRunway": "2017-12-11T03:38:00.000" 
                    }, 
                "airline": { 
                    "name": "Atlas Air", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                    }, 
                "flight": { 
                    "number": "432302", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                    }
                },
              { 
                "type": "arrival", 
                "status": "landed", 
                "departure": { 
                    "iataCode": "ULY", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-13-11T01:08:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-03-11T06:30:00.000", 
                    "actualRunway": "2017-12-11T03:38:00.000" 
                }, 
                "airline": { 
                    "name": "Gatlas Gir", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                }, 
                "flight": { 
                    "number": "354602", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                }
              },
              { 
                "type": "departure", 
                "status": "cancelled", 
                "departure": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-12-11T01:06:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "CVG", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-12-11T03:38:00.000", 
                    "actualRunway": "2017-12-11T03:38:00.000" 
                    }, 
                "airline": { 
                    "name": "Atlas Air", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                    }, 
                "flight": { 
                    "number": "432302", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                    }
                },
              { 
                "type": "arrival", 
                "status": "landed", 
                "departure": { 
                    "iataCode": "ULY", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-13-11T01:08:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-03-11T06:30:00.000", 
                    "actualRunway": "2017-12-11T03:38:00.000" 
                }, 
                "airline": { 
                    "name": "Gatlas Gir", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                }, 
                "flight": { 
                    "number": "354602", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                }
              },
              { 
                "type": "arrival", 
                "status": "cancelled", 
                "departure": { 
                    "iataCode": "ULY", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-13-11T01:08:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-03-11T06:30:00.000", 
                    "actualRunway": "2017-12-11T03:38:00.000" 
                }, 
                "airline": { 
                    "name": "Gatlas Gir", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                }, 
                "flight": { 
                    "number": "354602", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                }
              },
              { 
                "type": "departure", 
                "status": "landed", 
                "departure": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-12-11T01:06:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "CVG", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-12-11T03:38:00.000", 
                    "actualRunway": "2017-12-11T03:38:00.000" 
                    }, 
                "airline": { 
                    "name": "Atlas Air", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                    }, 
                "flight": { 
                    "number": "432302", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                    }
                },
                { 
                "type": "departure", 
                "status": "cancelled", 
                "departure": { 
                    "iataCode": "VKO", 
                    "icaoCode": "KJFK", 
                    "scheduledTime": "2017-12-11T01:06:00.000", 
                    "estimatedRunway": "2017-12-11T02:07:00.000", 
                    "actualRunway": "2017-12-11T02:07:00.000" }, 
                "arrival": { 
                    "iataCode": "JFK", 
                    "icaoCode": "KCVG", 
                    "estimatedRunway": "2017-12-11T03:38:00.000", 
                    "actualRunway": "2018-11-11T03:38:00.000" 
                    }, 
                "airline": { 
                    "name": "AtlGHghas Air", 
                    "iataCode": "5Y", 
                    "icaoCode": "GTI" 
                    }, 
                "flight": { 
                    "number": "30dfs2", 
                    "iataNumber": "5Y302", 
                    "icaoNumber": "GTI302" 
                    }
                }
          ]
      }
    }

    render() {
        return (
            <div>
                <button className="status" onClick={this.filterDepartures}>Departure</button>
                <button className="status" onClick={this.filterArrivals}>Arrival</button>
                <button className="status" onClick={this.filterCancelled}>Cancelled</button>        
                <input onChange={this.searchFlights}/>
                <Table flightData={this.state.data} />
            </div>
        )
    }


    filterDepartures() {
        // console.log(this.state);
        var arr = [];
        for(var i = 0; i < this.data.data.length; i++) {
            if (this.data.data[i].type === 'departure') {
                arr.push(this.data.data[i]);
            }
        }
        this.setState(
            {
                data: arr
            }
        )
    }

    filterArrivals() {
        // console.log(this.state);
        var arr = [];
        for(var i = 0; i < this.data.data.length; i++) {
            if (this.data.data[i].type === 'arrival') {
                arr.push(this.data.data[i]);
            }
        }
        this.setState(
            {
                data: arr
            }
        )
    }

    filterCancelled() {      
        // console.log(this.state);
        var arr = [];
        for(var i = 0; i < this.state.data.length; i++) {
            if (this.state.data[i].status === 'cancelled') {
                arr.push(this.state.data[i]);
            }
        }
        this.setState(
            {
                data: arr
            }
        )
    }

    searchFlights() {
      
    }
}

export default App;
