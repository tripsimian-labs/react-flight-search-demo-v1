export const apimock_flightoffers_response = {
  data: {
    slices: [
      {
        origin_type: 'airport',
        origin: {
          type: 'airport',
          time_zone: 'Europe/Paris',
          name: 'Paris Charles de Gaulle Airport',
          longitude: 2.548962,
          latitude: 49.011244,
          id: 'arp_cdg_fr',
          icao_code: 'LFPG',
          iata_country_code: 'FR',
          iata_code: 'CDG',
          iata_city_code: 'PAR',
          city_name: 'Paris',
          city: {
            type: 'city',
            time_zone: null,
            name: 'Paris',
            longitude: null,
            latitude: null,
            id: 'cit_par_fr',
            icao_code: null,
            iata_country_code: 'FR',
            iata_code: 'PAR',
            iata_city_code: 'PAR',
            city_name: null
          },
          airports: null
        },
        destination_type: 'airport',
        destination: {
          type: 'airport',
          time_zone: 'Europe/London',
          name: 'Heathrow Airport',
          longitude: -0.458118,
          latitude: 51.470311,
          id: 'arp_lhr_gb',
          icao_code: 'EGLL',
          iata_country_code: 'GB',
          iata_code: 'LHR',
          iata_city_code: 'LON',
          city_name: 'London',
          city: {
            type: 'city',
            time_zone: null,
            name: 'London',
            longitude: null,
            latitude: null,
            id: 'cit_lon_gb',
            icao_code: null,
            iata_country_code: 'GB',
            iata_code: 'LON',
            iata_city_code: 'LON',
            city_name: null
          },
          airports: null
        },
        departure_date: '2021-09-09',
        created_at: '2021-08-19T16:08:58.157140Z'
      }
    ],
    passengers: [
      { type: 'adult', id: 'pas_0000AAUJyZopWtWyTmXmWg', age: null }
    ],
    offers: [
      {
        updated_at: '2021-08-19T16:09:00.699068Z',
        total_emissions_kg: '20',
        total_currency: 'GBP',
        total_amount: '34.20',
        tax_currency: 'GBP',
        tax_amount: '27.20',
        slices: [
          {
            segments: [
              {
                passengers: [
                  {
                    passenger_id: 'pas_0000AAUJyZopWtWyTmXmWg',
                    fare_basis_code: 'OXZ0HO',
                    cabin_class_marketing_name: 'Euro Traveller',
                    cabin_class: 'economy',
                    baggages: []
                  }
                ],
                origin_terminal: '2A',
                origin: {
                  type: 'airport',
                  time_zone: 'Europe/Paris',
                  name: 'Paris Charles de Gaulle Airport',
                  longitude: 2.548962,
                  latitude: 49.011244,
                  id: 'arp_cdg_fr',
                  icao_code: 'LFPG',
                  iata_country_code: 'FR',
                  iata_code: 'CDG',
                  iata_city_code: 'PAR',
                  city_name: 'Paris',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'Paris',
                    longitude: null,
                    latitude: null,
                    id: 'cit_par_fr',
                    icao_code: null,
                    iata_country_code: 'FR',
                    iata_code: 'PAR',
                    iata_city_code: 'PAR',
                    city_name: null
                  },
                  airports: null
                },
                operating_carrier_flight_number: null,
                operating_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                marketing_carrier_flight_number: '0309',
                marketing_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                id: 'ost_0000AAUJyoHhkKwjLOA2TZ',
                duration: 'PT1H20M',
                distance: null,
                destination_terminal: '5',
                destination: {
                  type: 'airport',
                  time_zone: 'Europe/London',
                  name: 'Heathrow Airport',
                  longitude: -0.458118,
                  latitude: 51.470311,
                  id: 'arp_lhr_gb',
                  icao_code: 'EGLL',
                  iata_country_code: 'GB',
                  iata_code: 'LHR',
                  iata_city_code: 'LON',
                  city_name: 'London',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'London',
                    longitude: null,
                    latitude: null,
                    id: 'cit_lon_gb',
                    icao_code: null,
                    iata_country_code: 'GB',
                    iata_code: 'LON',
                    iata_city_code: 'LON',
                    city_name: null
                  },
                  airports: null
                },
                departing_at: '2021-09-09T12:10:00',
                arriving_at: '2021-09-09T12:30:00',
                aircraft: {
                  name: 'Airbus A320 (sharklets)',
                  id: 'arc_00009Y7nq3J0w9nlhN3x3Y',
                  iata_code: '32A'
                }
              }
            ],
            origin_type: 'airport',
            origin: {
              type: 'airport',
              time_zone: 'Europe/Paris',
              name: 'Paris Charles de Gaulle Airport',
              longitude: 2.548962,
              latitude: 49.011244,
              id: 'arp_cdg_fr',
              icao_code: 'LFPG',
              iata_country_code: 'FR',
              iata_code: 'CDG',
              iata_city_code: 'PAR',
              city_name: 'Paris',
              city: {
                type: 'city',
                time_zone: null,
                name: 'Paris',
                longitude: null,
                latitude: null,
                id: 'cit_par_fr',
                icao_code: null,
                iata_country_code: 'FR',
                iata_code: 'PAR',
                iata_city_code: 'PAR',
                city_name: null
              },
              airports: null
            },
            id: 'ose_0000AAUJyo6MQVs8mCqynI',
            fare_brand_name: 'Economy Basic',
            duration: 'PT1H20M',
            destination_type: 'airport',
            destination: {
              type: 'airport',
              time_zone: 'Europe/London',
              name: 'Heathrow Airport',
              longitude: -0.458118,
              latitude: 51.470311,
              id: 'arp_lhr_gb',
              icao_code: 'EGLL',
              iata_country_code: 'GB',
              iata_code: 'LHR',
              iata_city_code: 'LON',
              city_name: 'London',
              city: {
                type: 'city',
                time_zone: null,
                name: 'London',
                longitude: null,
                latitude: null,
                id: 'cit_lon_gb',
                icao_code: null,
                iata_country_code: 'GB',
                iata_code: 'LON',
                iata_city_code: 'LON',
                city_name: null
              },
              airports: null
            },
            conditions: {
              change_before_departure: {
                penalty_currency: 'GBP',
                penalty_amount: '0.00',
                allowed: true
              }
            }
          }
        ],
        payment_requirements: {
          requires_instant_payment: false,
          price_guarantee_expires_at: null,
          payment_required_by: '2021-08-19T23:59:59Z'
        },
        passengers: [{ type: 'adult', id: 'pas_0000AAUJyZopWtWyTmXmWg' }],
        passenger_identity_documents_required: false,
        owner: {
          name: 'British Airways',
          id: 'arl_00009VME7DBKeMags5CliQ',
          iata_code: 'BA'
        },
        live_mode: false,
        id: 'off_0000AAUJyoKtYTUxVHeaRs',
        expires_at: '2021-08-19T16:38:58.384000Z',
        created_at: '2021-08-19T16:09:00.699068Z',
        conditions: {
          refund_before_departure: {
            penalty_currency: null,
            penalty_amount: null,
            allowed: false
          },
          change_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '0.00',
            allowed: true
          }
        },
        base_currency: 'GBP',
        base_amount: '7.00',
        allowed_passenger_identity_document_types: []
      },
      {
        updated_at: '2021-08-19T16:09:00.699068Z',
        total_emissions_kg: '23',
        total_currency: 'GBP',
        total_amount: '34.20',
        tax_currency: 'GBP',
        tax_amount: '27.20',
        slices: [
          {
            segments: [
              {
                passengers: [
                  {
                    passenger_id: 'pas_0000AAUJyZopWtWyTmXmWg',
                    fare_basis_code: 'OXZ0HO',
                    cabin_class_marketing_name: 'Euro Traveller',
                    cabin_class: 'economy',
                    baggages: []
                  }
                ],
                origin_terminal: '2A',
                origin: {
                  type: 'airport',
                  time_zone: 'Europe/Paris',
                  name: 'Paris Charles de Gaulle Airport',
                  longitude: 2.548962,
                  latitude: 49.011244,
                  id: 'arp_cdg_fr',
                  icao_code: 'LFPG',
                  iata_country_code: 'FR',
                  iata_code: 'CDG',
                  iata_city_code: 'PAR',
                  city_name: 'Paris',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'Paris',
                    longitude: null,
                    latitude: null,
                    id: 'cit_par_fr',
                    icao_code: null,
                    iata_country_code: 'FR',
                    iata_code: 'PAR',
                    iata_city_code: 'PAR',
                    city_name: null
                  },
                  airports: null
                },
                operating_carrier_flight_number: null,
                operating_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                marketing_carrier_flight_number: '0315',
                marketing_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                id: 'ost_0000AAUJyoI3j1EJMUKK1q',
                duration: 'PT1H20M',
                distance: null,
                destination_terminal: '5',
                destination: {
                  type: 'airport',
                  time_zone: 'Europe/London',
                  name: 'Heathrow Airport',
                  longitude: -0.458118,
                  latitude: 51.470311,
                  id: 'arp_lhr_gb',
                  icao_code: 'EGLL',
                  iata_country_code: 'GB',
                  iata_code: 'LHR',
                  iata_city_code: 'LON',
                  city_name: 'London',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'London',
                    longitude: null,
                    latitude: null,
                    id: 'cit_lon_gb',
                    icao_code: null,
                    iata_country_code: 'GB',
                    iata_code: 'LON',
                    iata_city_code: 'LON',
                    city_name: null
                  },
                  airports: null
                },
                departing_at: '2021-09-09T14:10:00',
                arriving_at: '2021-09-09T14:30:00',
                aircraft: {
                  name: 'Airbus A320',
                  id: 'arc_00009VMF8AgpV5sdO0xXAr',
                  iata_code: '320'
                }
              }
            ],
            origin_type: 'airport',
            origin: {
              type: 'airport',
              time_zone: 'Europe/Paris',
              name: 'Paris Charles de Gaulle Airport',
              longitude: 2.548962,
              latitude: 49.011244,
              id: 'arp_cdg_fr',
              icao_code: 'LFPG',
              iata_country_code: 'FR',
              iata_code: 'CDG',
              iata_city_code: 'PAR',
              city_name: 'Paris',
              city: {
                type: 'city',
                time_zone: null,
                name: 'Paris',
                longitude: null,
                latitude: null,
                id: 'cit_par_fr',
                icao_code: null,
                iata_country_code: 'FR',
                iata_code: 'PAR',
                iata_city_code: 'PAR',
                city_name: null
              },
              airports: null
            },
            id: 'ose_0000AAUJyo6MQVs8mCqynJ',
            fare_brand_name: 'Economy Basic',
            duration: 'PT1H20M',
            destination_type: 'airport',
            destination: {
              type: 'airport',
              time_zone: 'Europe/London',
              name: 'Heathrow Airport',
              longitude: -0.458118,
              latitude: 51.470311,
              id: 'arp_lhr_gb',
              icao_code: 'EGLL',
              iata_country_code: 'GB',
              iata_code: 'LHR',
              iata_city_code: 'LON',
              city_name: 'London',
              city: {
                type: 'city',
                time_zone: null,
                name: 'London',
                longitude: null,
                latitude: null,
                id: 'cit_lon_gb',
                icao_code: null,
                iata_country_code: 'GB',
                iata_code: 'LON',
                iata_city_code: 'LON',
                city_name: null
              },
              airports: null
            },
            conditions: {
              change_before_departure: {
                penalty_currency: 'GBP',
                penalty_amount: '0.00',
                allowed: true
              }
            }
          }
        ],
        payment_requirements: {
          requires_instant_payment: false,
          price_guarantee_expires_at: null,
          payment_required_by: '2021-08-19T23:59:59Z'
        },
        passengers: [{ type: 'adult', id: 'pas_0000AAUJyZopWtWyTmXmWg' }],
        passenger_identity_documents_required: false,
        owner: {
          name: 'British Airways',
          id: 'arl_00009VME7DBKeMags5CliQ',
          iata_code: 'BA'
        },
        live_mode: false,
        id: 'off_0000AAUJyoKtYTUxVHeaRv',
        expires_at: '2021-08-19T16:38:58.384000Z',
        created_at: '2021-08-19T16:09:00.699068Z',
        conditions: {
          refund_before_departure: {
            penalty_currency: null,
            penalty_amount: null,
            allowed: false
          },
          change_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '0.00',
            allowed: true
          }
        },
        base_currency: 'GBP',
        base_amount: '7.00',
        allowed_passenger_identity_document_types: []
      },
      {
        updated_at: '2021-08-19T16:09:00.699068Z',
        total_emissions_kg: '20',
        total_currency: 'GBP',
        total_amount: '58.20',
        tax_currency: 'GBP',
        tax_amount: '27.20',
        slices: [
          {
            segments: [
              {
                passengers: [
                  {
                    passenger_id: 'pas_0000AAUJyZopWtWyTmXmWg',
                    fare_basis_code: 'OXV2HO',
                    cabin_class_marketing_name: 'Euro Traveller',
                    cabin_class: 'economy',
                    baggages: [{ type: 'checked', quantity: 1 }]
                  }
                ],
                origin_terminal: '2A',
                origin: {
                  type: 'airport',
                  time_zone: 'Europe/Paris',
                  name: 'Paris Charles de Gaulle Airport',
                  longitude: 2.548962,
                  latitude: 49.011244,
                  id: 'arp_cdg_fr',
                  icao_code: 'LFPG',
                  iata_country_code: 'FR',
                  iata_code: 'CDG',
                  iata_city_code: 'PAR',
                  city_name: 'Paris',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'Paris',
                    longitude: null,
                    latitude: null,
                    id: 'cit_par_fr',
                    icao_code: null,
                    iata_country_code: 'FR',
                    iata_code: 'PAR',
                    iata_city_code: 'PAR',
                    city_name: null
                  },
                  airports: null
                },
                operating_carrier_flight_number: null,
                operating_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                marketing_carrier_flight_number: '0309',
                marketing_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                id: 'ost_0000AAUJyoIPhhVtNaUba5',
                duration: 'PT1H20M',
                distance: null,
                destination_terminal: '5',
                destination: {
                  type: 'airport',
                  time_zone: 'Europe/London',
                  name: 'Heathrow Airport',
                  longitude: -0.458118,
                  latitude: 51.470311,
                  id: 'arp_lhr_gb',
                  icao_code: 'EGLL',
                  iata_country_code: 'GB',
                  iata_code: 'LHR',
                  iata_city_code: 'LON',
                  city_name: 'London',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'London',
                    longitude: null,
                    latitude: null,
                    id: 'cit_lon_gb',
                    icao_code: null,
                    iata_country_code: 'GB',
                    iata_code: 'LON',
                    iata_city_code: 'LON',
                    city_name: null
                  },
                  airports: null
                },
                departing_at: '2021-09-09T12:10:00',
                arriving_at: '2021-09-09T12:30:00',
                aircraft: {
                  name: 'Airbus A320 (sharklets)',
                  id: 'arc_00009Y7nq3J0w9nlhN3x3Y',
                  iata_code: '32A'
                }
              }
            ],
            origin_type: 'airport',
            origin: {
              type: 'airport',
              time_zone: 'Europe/Paris',
              name: 'Paris Charles de Gaulle Airport',
              longitude: 2.548962,
              latitude: 49.011244,
              id: 'arp_cdg_fr',
              icao_code: 'LFPG',
              iata_country_code: 'FR',
              iata_code: 'CDG',
              iata_city_code: 'PAR',
              city_name: 'Paris',
              city: {
                type: 'city',
                time_zone: null,
                name: 'Paris',
                longitude: null,
                latitude: null,
                id: 'cit_par_fr',
                icao_code: null,
                iata_country_code: 'FR',
                iata_code: 'PAR',
                iata_city_code: 'PAR',
                city_name: null
              },
              airports: null
            },
            id: 'ose_0000AAUJyo6MQVs8mCqynI',
            fare_brand_name: 'Economy Plus',
            duration: 'PT1H20M',
            destination_type: 'airport',
            destination: {
              type: 'airport',
              time_zone: 'Europe/London',
              name: 'Heathrow Airport',
              longitude: -0.458118,
              latitude: 51.470311,
              id: 'arp_lhr_gb',
              icao_code: 'EGLL',
              iata_country_code: 'GB',
              iata_code: 'LHR',
              iata_city_code: 'LON',
              city_name: 'London',
              city: {
                type: 'city',
                time_zone: null,
                name: 'London',
                longitude: null,
                latitude: null,
                id: 'cit_lon_gb',
                icao_code: null,
                iata_country_code: 'GB',
                iata_code: 'LON',
                iata_city_code: 'LON',
                city_name: null
              },
              airports: null
            },
            conditions: {
              change_before_departure: {
                penalty_currency: 'GBP',
                penalty_amount: '0.00',
                allowed: true
              }
            }
          }
        ],
        payment_requirements: {
          requires_instant_payment: false,
          price_guarantee_expires_at: null,
          payment_required_by: '2021-08-22T23:59:59Z'
        },
        passengers: [{ type: 'adult', id: 'pas_0000AAUJyZopWtWyTmXmWg' }],
        passenger_identity_documents_required: false,
        owner: {
          name: 'British Airways',
          id: 'arl_00009VME7DBKeMags5CliQ',
          iata_code: 'BA'
        },
        live_mode: false,
        id: 'off_0000AAUJyoLFX9mXWNos09',
        expires_at: '2021-08-19T16:38:58.384000Z',
        created_at: '2021-08-19T16:09:00.699068Z',
        conditions: {
          refund_before_departure: {
            penalty_currency: null,
            penalty_amount: null,
            allowed: false
          },
          change_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '0.00',
            allowed: true
          }
        },
        base_currency: 'GBP',
        base_amount: '31.00',
        allowed_passenger_identity_document_types: []
      },
      {
        updated_at: '2021-08-19T16:09:00.699068Z',
        total_emissions_kg: '23',
        total_currency: 'GBP',
        total_amount: '58.20',
        tax_currency: 'GBP',
        tax_amount: '27.20',
        slices: [
          {
            segments: [
              {
                passengers: [
                  {
                    passenger_id: 'pas_0000AAUJyZopWtWyTmXmWg',
                    fare_basis_code: 'OXV2HO',
                    cabin_class_marketing_name: 'Euro Traveller',
                    cabin_class: 'economy',
                    baggages: [{ type: 'checked', quantity: 1 }]
                  }
                ],
                origin_terminal: '2A',
                origin: {
                  type: 'airport',
                  time_zone: 'Europe/Paris',
                  name: 'Paris Charles de Gaulle Airport',
                  longitude: 2.548962,
                  latitude: 49.011244,
                  id: 'arp_cdg_fr',
                  icao_code: 'LFPG',
                  iata_country_code: 'FR',
                  iata_code: 'CDG',
                  iata_city_code: 'PAR',
                  city_name: 'Paris',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'Paris',
                    longitude: null,
                    latitude: null,
                    id: 'cit_par_fr',
                    icao_code: null,
                    iata_country_code: 'FR',
                    iata_code: 'PAR',
                    iata_city_code: 'PAR',
                    city_name: null
                  },
                  airports: null
                },
                operating_carrier_flight_number: null,
                operating_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                marketing_carrier_flight_number: '0315',
                marketing_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                id: 'ost_0000AAUJyoIPhhVtNaUba8',
                duration: 'PT1H20M',
                distance: null,
                destination_terminal: '5',
                destination: {
                  type: 'airport',
                  time_zone: 'Europe/London',
                  name: 'Heathrow Airport',
                  longitude: -0.458118,
                  latitude: 51.470311,
                  id: 'arp_lhr_gb',
                  icao_code: 'EGLL',
                  iata_country_code: 'GB',
                  iata_code: 'LHR',
                  iata_city_code: 'LON',
                  city_name: 'London',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'London',
                    longitude: null,
                    latitude: null,
                    id: 'cit_lon_gb',
                    icao_code: null,
                    iata_country_code: 'GB',
                    iata_code: 'LON',
                    iata_city_code: 'LON',
                    city_name: null
                  },
                  airports: null
                },
                departing_at: '2021-09-09T14:10:00',
                arriving_at: '2021-09-09T14:30:00',
                aircraft: {
                  name: 'Airbus A320',
                  id: 'arc_00009VMF8AgpV5sdO0xXAr',
                  iata_code: '320'
                }
              }
            ],
            origin_type: 'airport',
            origin: {
              type: 'airport',
              time_zone: 'Europe/Paris',
              name: 'Paris Charles de Gaulle Airport',
              longitude: 2.548962,
              latitude: 49.011244,
              id: 'arp_cdg_fr',
              icao_code: 'LFPG',
              iata_country_code: 'FR',
              iata_code: 'CDG',
              iata_city_code: 'PAR',
              city_name: 'Paris',
              city: {
                type: 'city',
                time_zone: null,
                name: 'Paris',
                longitude: null,
                latitude: null,
                id: 'cit_par_fr',
                icao_code: null,
                iata_country_code: 'FR',
                iata_code: 'PAR',
                iata_city_code: 'PAR',
                city_name: null
              },
              airports: null
            },
            id: 'ose_0000AAUJyo6MQVs8mCqynJ',
            fare_brand_name: 'Economy Plus',
            duration: 'PT1H20M',
            destination_type: 'airport',
            destination: {
              type: 'airport',
              time_zone: 'Europe/London',
              name: 'Heathrow Airport',
              longitude: -0.458118,
              latitude: 51.470311,
              id: 'arp_lhr_gb',
              icao_code: 'EGLL',
              iata_country_code: 'GB',
              iata_code: 'LHR',
              iata_city_code: 'LON',
              city_name: 'London',
              city: {
                type: 'city',
                time_zone: null,
                name: 'London',
                longitude: null,
                latitude: null,
                id: 'cit_lon_gb',
                icao_code: null,
                iata_country_code: 'GB',
                iata_code: 'LON',
                iata_city_code: 'LON',
                city_name: null
              },
              airports: null
            },
            conditions: {
              change_before_departure: {
                penalty_currency: 'GBP',
                penalty_amount: '0.00',
                allowed: true
              }
            }
          }
        ],
        payment_requirements: {
          requires_instant_payment: false,
          price_guarantee_expires_at: null,
          payment_required_by: '2021-08-22T23:59:59Z'
        },
        passengers: [{ type: 'adult', id: 'pas_0000AAUJyZopWtWyTmXmWg' }],
        passenger_identity_documents_required: false,
        owner: {
          name: 'British Airways',
          id: 'arl_00009VME7DBKeMags5CliQ',
          iata_code: 'BA'
        },
        live_mode: false,
        id: 'off_0000AAUJyoLFX9mXWNos0E',
        expires_at: '2021-08-19T16:38:58.384000Z',
        created_at: '2021-08-19T16:09:00.699068Z',
        conditions: {
          refund_before_departure: {
            penalty_currency: null,
            penalty_amount: null,
            allowed: false
          },
          change_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '0.00',
            allowed: true
          }
        },
        base_currency: 'GBP',
        base_amount: '31.00',
        allowed_passenger_identity_document_types: []
      },
      {
        updated_at: '2021-08-19T16:09:00.699068Z',
        total_emissions_kg: '22',
        total_currency: 'GBP',
        total_amount: '79.20',
        tax_currency: 'GBP',
        tax_amount: '27.20',
        slices: [
          {
            segments: [
              {
                passengers: [
                  {
                    passenger_id: 'pas_0000AAUJyZopWtWyTmXmWg',
                    fare_basis_code: 'NEZ0HO',
                    cabin_class_marketing_name: 'Euro Traveller',
                    cabin_class: 'economy',
                    baggages: []
                  }
                ],
                origin_terminal: '2A',
                origin: {
                  type: 'airport',
                  time_zone: 'Europe/Paris',
                  name: 'Paris Charles de Gaulle Airport',
                  longitude: 2.548962,
                  latitude: 49.011244,
                  id: 'arp_cdg_fr',
                  icao_code: 'LFPG',
                  iata_country_code: 'FR',
                  iata_code: 'CDG',
                  iata_city_code: 'PAR',
                  city_name: 'Paris',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'Paris',
                    longitude: null,
                    latitude: null,
                    id: 'cit_par_fr',
                    icao_code: null,
                    iata_country_code: 'FR',
                    iata_code: 'PAR',
                    iata_city_code: 'PAR',
                    city_name: null
                  },
                  airports: null
                },
                operating_carrier_flight_number: null,
                operating_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                marketing_carrier_flight_number: '0323',
                marketing_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                id: 'ost_0000AAUJyoIlgNnTOget8L',
                duration: 'PT1H15M',
                distance: null,
                destination_terminal: '5',
                destination: {
                  type: 'airport',
                  time_zone: 'Europe/London',
                  name: 'Heathrow Airport',
                  longitude: -0.458118,
                  latitude: 51.470311,
                  id: 'arp_lhr_gb',
                  icao_code: 'EGLL',
                  iata_country_code: 'GB',
                  iata_code: 'LHR',
                  iata_city_code: 'LON',
                  city_name: 'London',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'London',
                    longitude: null,
                    latitude: null,
                    id: 'cit_lon_gb',
                    icao_code: null,
                    iata_country_code: 'GB',
                    iata_code: 'LON',
                    iata_city_code: 'LON',
                    city_name: null
                  },
                  airports: null
                },
                departing_at: '2021-09-09T18:05:00',
                arriving_at: '2021-09-09T18:20:00',
                aircraft: {
                  name: 'Airbus A319',
                  id: 'arc_00009VMF8AgpV5sdO0xXAn',
                  iata_code: '319'
                }
              }
            ],
            origin_type: 'airport',
            origin: {
              type: 'airport',
              time_zone: 'Europe/Paris',
              name: 'Paris Charles de Gaulle Airport',
              longitude: 2.548962,
              latitude: 49.011244,
              id: 'arp_cdg_fr',
              icao_code: 'LFPG',
              iata_country_code: 'FR',
              iata_code: 'CDG',
              iata_city_code: 'PAR',
              city_name: 'Paris',
              city: {
                type: 'city',
                time_zone: null,
                name: 'Paris',
                longitude: null,
                latitude: null,
                id: 'cit_par_fr',
                icao_code: null,
                iata_country_code: 'FR',
                iata_code: 'PAR',
                iata_city_code: 'PAR',
                city_name: null
              },
              airports: null
            },
            id: 'ose_0000AAUJyo6MQVs8mCqynK',
            fare_brand_name: 'Economy Basic',
            duration: 'PT1H15M',
            destination_type: 'airport',
            destination: {
              type: 'airport',
              time_zone: 'Europe/London',
              name: 'Heathrow Airport',
              longitude: -0.458118,
              latitude: 51.470311,
              id: 'arp_lhr_gb',
              icao_code: 'EGLL',
              iata_country_code: 'GB',
              iata_code: 'LHR',
              iata_city_code: 'LON',
              city_name: 'London',
              city: {
                type: 'city',
                time_zone: null,
                name: 'London',
                longitude: null,
                latitude: null,
                id: 'cit_lon_gb',
                icao_code: null,
                iata_country_code: 'GB',
                iata_code: 'LON',
                iata_city_code: 'LON',
                city_name: null
              },
              airports: null
            },
            conditions: {
              change_before_departure: {
                penalty_currency: 'GBP',
                penalty_amount: '0.00',
                allowed: true
              }
            }
          }
        ],
        payment_requirements: {
          requires_instant_payment: false,
          price_guarantee_expires_at: null,
          payment_required_by: '2021-08-19T23:59:59Z'
        },
        passengers: [{ type: 'adult', id: 'pas_0000AAUJyZopWtWyTmXmWg' }],
        passenger_identity_documents_required: false,
        owner: {
          name: 'British Airways',
          id: 'arl_00009VME7DBKeMags5CliQ',
          iata_code: 'BA'
        },
        live_mode: false,
        id: 'off_0000AAUJyoLbVq47XTz9YO',
        expires_at: '2021-08-19T16:38:58.384000Z',
        created_at: '2021-08-19T16:09:00.699068Z',
        conditions: {
          refund_before_departure: {
            penalty_currency: null,
            penalty_amount: null,
            allowed: false
          },
          change_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '0.00',
            allowed: true
          }
        },
        base_currency: 'GBP',
        base_amount: '52.00',
        allowed_passenger_identity_document_types: []
      },
      {
        updated_at: '2021-08-19T16:09:00.699068Z',
        total_emissions_kg: '22',
        total_currency: 'GBP',
        total_amount: '88.20',
        tax_currency: 'GBP',
        tax_amount: '27.20',
        slices: [
          {
            segments: [
              {
                passengers: [
                  {
                    passenger_id: 'pas_0000AAUJyZopWtWyTmXmWg',
                    fare_basis_code: 'NZ0HO',
                    cabin_class_marketing_name: 'Euro Traveller',
                    cabin_class: 'economy',
                    baggages: []
                  }
                ],
                origin_terminal: '2A',
                origin: {
                  type: 'airport',
                  time_zone: 'Europe/Paris',
                  name: 'Paris Charles de Gaulle Airport',
                  longitude: 2.548962,
                  latitude: 49.011244,
                  id: 'arp_cdg_fr',
                  icao_code: 'LFPG',
                  iata_country_code: 'FR',
                  iata_code: 'CDG',
                  iata_city_code: 'PAR',
                  city_name: 'Paris',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'Paris',
                    longitude: null,
                    latitude: null,
                    id: 'cit_par_fr',
                    icao_code: null,
                    iata_country_code: 'FR',
                    iata_code: 'PAR',
                    iata_city_code: 'PAR',
                    city_name: null
                  },
                  airports: null
                },
                operating_carrier_flight_number: null,
                operating_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                marketing_carrier_flight_number: '0303',
                marketing_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                id: 'ost_0000AAUJyoJ7f453PmpAga',
                duration: 'PT1H20M',
                distance: null,
                destination_terminal: '5',
                destination: {
                  type: 'airport',
                  time_zone: 'Europe/London',
                  name: 'Heathrow Airport',
                  longitude: -0.458118,
                  latitude: 51.470311,
                  id: 'arp_lhr_gb',
                  icao_code: 'EGLL',
                  iata_country_code: 'GB',
                  iata_code: 'LHR',
                  iata_city_code: 'LON',
                  city_name: 'London',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'London',
                    longitude: null,
                    latitude: null,
                    id: 'cit_lon_gb',
                    icao_code: null,
                    iata_country_code: 'GB',
                    iata_code: 'LON',
                    iata_city_code: 'LON',
                    city_name: null
                  },
                  airports: null
                },
                departing_at: '2021-09-09T08:55:00',
                arriving_at: '2021-09-09T09:15:00',
                aircraft: {
                  name: 'Airbus A319',
                  id: 'arc_00009VMF8AgpV5sdO0xXAn',
                  iata_code: '319'
                }
              }
            ],
            origin_type: 'airport',
            origin: {
              type: 'airport',
              time_zone: 'Europe/Paris',
              name: 'Paris Charles de Gaulle Airport',
              longitude: 2.548962,
              latitude: 49.011244,
              id: 'arp_cdg_fr',
              icao_code: 'LFPG',
              iata_country_code: 'FR',
              iata_code: 'CDG',
              iata_city_code: 'PAR',
              city_name: 'Paris',
              city: {
                type: 'city',
                time_zone: null,
                name: 'Paris',
                longitude: null,
                latitude: null,
                id: 'cit_par_fr',
                icao_code: null,
                iata_country_code: 'FR',
                iata_code: 'PAR',
                iata_city_code: 'PAR',
                city_name: null
              },
              airports: null
            },
            id: 'ose_0000AAUJyo6MQVs8mCqynL',
            fare_brand_name: 'Economy Basic',
            duration: 'PT1H20M',
            destination_type: 'airport',
            destination: {
              type: 'airport',
              time_zone: 'Europe/London',
              name: 'Heathrow Airport',
              longitude: -0.458118,
              latitude: 51.470311,
              id: 'arp_lhr_gb',
              icao_code: 'EGLL',
              iata_country_code: 'GB',
              iata_code: 'LHR',
              iata_city_code: 'LON',
              city_name: 'London',
              city: {
                type: 'city',
                time_zone: null,
                name: 'London',
                longitude: null,
                latitude: null,
                id: 'cit_lon_gb',
                icao_code: null,
                iata_country_code: 'GB',
                iata_code: 'LON',
                iata_city_code: 'LON',
                city_name: null
              },
              airports: null
            },
            conditions: {
              change_before_departure: {
                penalty_currency: 'GBP',
                penalty_amount: '0.00',
                allowed: true
              }
            }
          }
        ],
        payment_requirements: {
          requires_instant_payment: false,
          price_guarantee_expires_at: null,
          payment_required_by: '2021-08-19T23:59:59Z'
        },
        passengers: [{ type: 'adult', id: 'pas_0000AAUJyZopWtWyTmXmWg' }],
        passenger_identity_documents_required: false,
        owner: {
          name: 'British Airways',
          id: 'arl_00009VME7DBKeMags5CliQ',
          iata_code: 'BA'
        },
        live_mode: false,
        id: 'off_0000AAUJyoLbVq47XTz9YR',
        expires_at: '2021-08-19T16:38:58.384000Z',
        created_at: '2021-08-19T16:09:00.699068Z',
        conditions: {
          refund_before_departure: {
            penalty_currency: null,
            penalty_amount: null,
            allowed: false
          },
          change_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '0.00',
            allowed: true
          }
        },
        base_currency: 'GBP',
        base_amount: '61.00',
        allowed_passenger_identity_document_types: []
      },
      {
        updated_at: '2021-08-19T16:09:00.699068Z',
        total_emissions_kg: '22',
        total_currency: 'GBP',
        total_amount: '102.20',
        tax_currency: 'GBP',
        tax_amount: '27.20',
        slices: [
          {
            segments: [
              {
                passengers: [
                  {
                    passenger_id: 'pas_0000AAUJyZopWtWyTmXmWg',
                    fare_basis_code: 'NEV2HO',
                    cabin_class_marketing_name: 'Euro Traveller',
                    cabin_class: 'economy',
                    baggages: [{ type: 'checked', quantity: 1 }]
                  }
                ],
                origin_terminal: '2A',
                origin: {
                  type: 'airport',
                  time_zone: 'Europe/Paris',
                  name: 'Paris Charles de Gaulle Airport',
                  longitude: 2.548962,
                  latitude: 49.011244,
                  id: 'arp_cdg_fr',
                  icao_code: 'LFPG',
                  iata_country_code: 'FR',
                  iata_code: 'CDG',
                  iata_city_code: 'PAR',
                  city_name: 'Paris',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'Paris',
                    longitude: null,
                    latitude: null,
                    id: 'cit_par_fr',
                    icao_code: null,
                    iata_country_code: 'FR',
                    iata_code: 'PAR',
                    iata_city_code: 'PAR',
                    city_name: null
                  },
                  airports: null
                },
                operating_carrier_flight_number: null,
                operating_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                marketing_carrier_flight_number: '0323',
                marketing_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                id: 'ost_0000AAUJyoJ7f453PmpAgc',
                duration: 'PT1H15M',
                distance: null,
                destination_terminal: '5',
                destination: {
                  type: 'airport',
                  time_zone: 'Europe/London',
                  name: 'Heathrow Airport',
                  longitude: -0.458118,
                  latitude: 51.470311,
                  id: 'arp_lhr_gb',
                  icao_code: 'EGLL',
                  iata_country_code: 'GB',
                  iata_code: 'LHR',
                  iata_city_code: 'LON',
                  city_name: 'London',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'London',
                    longitude: null,
                    latitude: null,
                    id: 'cit_lon_gb',
                    icao_code: null,
                    iata_country_code: 'GB',
                    iata_code: 'LON',
                    iata_city_code: 'LON',
                    city_name: null
                  },
                  airports: null
                },
                departing_at: '2021-09-09T18:05:00',
                arriving_at: '2021-09-09T18:20:00',
                aircraft: {
                  name: 'Airbus A319',
                  id: 'arc_00009VMF8AgpV5sdO0xXAn',
                  iata_code: '319'
                }
              }
            ],
            origin_type: 'airport',
            origin: {
              type: 'airport',
              time_zone: 'Europe/Paris',
              name: 'Paris Charles de Gaulle Airport',
              longitude: 2.548962,
              latitude: 49.011244,
              id: 'arp_cdg_fr',
              icao_code: 'LFPG',
              iata_country_code: 'FR',
              iata_code: 'CDG',
              iata_city_code: 'PAR',
              city_name: 'Paris',
              city: {
                type: 'city',
                time_zone: null,
                name: 'Paris',
                longitude: null,
                latitude: null,
                id: 'cit_par_fr',
                icao_code: null,
                iata_country_code: 'FR',
                iata_code: 'PAR',
                iata_city_code: 'PAR',
                city_name: null
              },
              airports: null
            },
            id: 'ose_0000AAUJyo6MQVs8mCqynK',
            fare_brand_name: 'Economy Plus',
            duration: 'PT1H15M',
            destination_type: 'airport',
            destination: {
              type: 'airport',
              time_zone: 'Europe/London',
              name: 'Heathrow Airport',
              longitude: -0.458118,
              latitude: 51.470311,
              id: 'arp_lhr_gb',
              icao_code: 'EGLL',
              iata_country_code: 'GB',
              iata_code: 'LHR',
              iata_city_code: 'LON',
              city_name: 'London',
              city: {
                type: 'city',
                time_zone: null,
                name: 'London',
                longitude: null,
                latitude: null,
                id: 'cit_lon_gb',
                icao_code: null,
                iata_country_code: 'GB',
                iata_code: 'LON',
                iata_city_code: 'LON',
                city_name: null
              },
              airports: null
            },
            conditions: {
              change_before_departure: {
                penalty_currency: 'GBP',
                penalty_amount: '0.00',
                allowed: true
              }
            }
          }
        ],
        payment_requirements: {
          requires_instant_payment: false,
          price_guarantee_expires_at: null,
          payment_required_by: '2021-08-22T23:59:59Z'
        },
        passengers: [{ type: 'adult', id: 'pas_0000AAUJyZopWtWyTmXmWg' }],
        passenger_identity_documents_required: false,
        owner: {
          name: 'British Airways',
          id: 'arl_00009VME7DBKeMags5CliQ',
          iata_code: 'BA'
        },
        live_mode: false,
        id: 'off_0000AAUJyoLxUWLhYa9R6f',
        expires_at: '2021-08-19T16:38:58.384000Z',
        created_at: '2021-08-19T16:09:00.699068Z',
        conditions: {
          refund_before_departure: {
            penalty_currency: null,
            penalty_amount: null,
            allowed: false
          },
          change_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '0.00',
            allowed: true
          }
        },
        base_currency: 'GBP',
        base_amount: '75.00',
        allowed_passenger_identity_document_types: []
      },
      {
        updated_at: '2021-08-19T16:09:00.699068Z',
        total_emissions_kg: '20',
        total_currency: 'GBP',
        total_amount: '102.20',
        tax_currency: 'GBP',
        tax_amount: '27.20',
        slices: [
          {
            segments: [
              {
                passengers: [
                  {
                    passenger_id: 'pas_0000AAUJyZopWtWyTmXmWg',
                    fare_basis_code: 'OXV2OMR',
                    cabin_class_marketing_name: 'Euro Traveller',
                    cabin_class: 'economy',
                    baggages: [{ type: 'checked', quantity: 1 }]
                  }
                ],
                origin_terminal: '2A',
                origin: {
                  type: 'airport',
                  time_zone: 'Europe/Paris',
                  name: 'Paris Charles de Gaulle Airport',
                  longitude: 2.548962,
                  latitude: 49.011244,
                  id: 'arp_cdg_fr',
                  icao_code: 'LFPG',
                  iata_country_code: 'FR',
                  iata_code: 'CDG',
                  iata_city_code: 'PAR',
                  city_name: 'Paris',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'Paris',
                    longitude: null,
                    latitude: null,
                    id: 'cit_par_fr',
                    icao_code: null,
                    iata_country_code: 'FR',
                    iata_code: 'PAR',
                    iata_city_code: 'PAR',
                    city_name: null
                  },
                  airports: null
                },
                operating_carrier_flight_number: null,
                operating_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                marketing_carrier_flight_number: '0309',
                marketing_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                id: 'ost_0000AAUJyoJ7f453PmpAgg',
                duration: 'PT1H20M',
                distance: null,
                destination_terminal: '5',
                destination: {
                  type: 'airport',
                  time_zone: 'Europe/London',
                  name: 'Heathrow Airport',
                  longitude: -0.458118,
                  latitude: 51.470311,
                  id: 'arp_lhr_gb',
                  icao_code: 'EGLL',
                  iata_country_code: 'GB',
                  iata_code: 'LHR',
                  iata_city_code: 'LON',
                  city_name: 'London',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'London',
                    longitude: null,
                    latitude: null,
                    id: 'cit_lon_gb',
                    icao_code: null,
                    iata_country_code: 'GB',
                    iata_code: 'LON',
                    iata_city_code: 'LON',
                    city_name: null
                  },
                  airports: null
                },
                departing_at: '2021-09-09T12:10:00',
                arriving_at: '2021-09-09T12:30:00',
                aircraft: {
                  name: 'Airbus A320 (sharklets)',
                  id: 'arc_00009Y7nq3J0w9nlhN3x3Y',
                  iata_code: '32A'
                }
              }
            ],
            origin_type: 'airport',
            origin: {
              type: 'airport',
              time_zone: 'Europe/Paris',
              name: 'Paris Charles de Gaulle Airport',
              longitude: 2.548962,
              latitude: 49.011244,
              id: 'arp_cdg_fr',
              icao_code: 'LFPG',
              iata_country_code: 'FR',
              iata_code: 'CDG',
              iata_city_code: 'PAR',
              city_name: 'Paris',
              city: {
                type: 'city',
                time_zone: null,
                name: 'Paris',
                longitude: null,
                latitude: null,
                id: 'cit_par_fr',
                icao_code: null,
                iata_country_code: 'FR',
                iata_code: 'PAR',
                iata_city_code: 'PAR',
                city_name: null
              },
              airports: null
            },
            id: 'ose_0000AAUJyo6MQVs8mCqynI',
            fare_brand_name: 'Economy Select',
            duration: 'PT1H20M',
            destination_type: 'airport',
            destination: {
              type: 'airport',
              time_zone: 'Europe/London',
              name: 'Heathrow Airport',
              longitude: -0.458118,
              latitude: 51.470311,
              id: 'arp_lhr_gb',
              icao_code: 'EGLL',
              iata_country_code: 'GB',
              iata_code: 'LHR',
              iata_city_code: 'LON',
              city_name: 'London',
              city: {
                type: 'city',
                time_zone: null,
                name: 'London',
                longitude: null,
                latitude: null,
                id: 'cit_lon_gb',
                icao_code: null,
                iata_country_code: 'GB',
                iata_code: 'LON',
                iata_city_code: 'LON',
                city_name: null
              },
              airports: null
            },
            conditions: {
              change_before_departure: {
                penalty_currency: 'GBP',
                penalty_amount: '0.00',
                allowed: true
              }
            }
          }
        ],
        payment_requirements: {
          requires_instant_payment: false,
          price_guarantee_expires_at: null,
          payment_required_by: '2021-08-22T23:59:59Z'
        },
        passengers: [{ type: 'adult', id: 'pas_0000AAUJyZopWtWyTmXmWg' }],
        passenger_identity_documents_required: false,
        owner: {
          name: 'British Airways',
          id: 'arl_00009VME7DBKeMags5CliQ',
          iata_code: 'BA'
        },
        live_mode: false,
        id: 'off_0000AAUJyoLxUWLhYa9R6h',
        expires_at: '2021-08-19T16:38:58.384000Z',
        created_at: '2021-08-19T16:09:00.699068Z',
        conditions: {
          refund_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '25.00',
            allowed: true
          },
          change_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '0.00',
            allowed: true
          }
        },
        base_currency: 'GBP',
        base_amount: '75.00',
        allowed_passenger_identity_document_types: []
      },
      {
        updated_at: '2021-08-19T16:09:00.699068Z',
        total_emissions_kg: '23',
        total_currency: 'GBP',
        total_amount: '102.20',
        tax_currency: 'GBP',
        tax_amount: '27.20',
        slices: [
          {
            segments: [
              {
                passengers: [
                  {
                    passenger_id: 'pas_0000AAUJyZopWtWyTmXmWg',
                    fare_basis_code: 'OXV2OMR',
                    cabin_class_marketing_name: 'Euro Traveller',
                    cabin_class: 'economy',
                    baggages: [{ type: 'checked', quantity: 1 }]
                  }
                ],
                origin_terminal: '2A',
                origin: {
                  type: 'airport',
                  time_zone: 'Europe/Paris',
                  name: 'Paris Charles de Gaulle Airport',
                  longitude: 2.548962,
                  latitude: 49.011244,
                  id: 'arp_cdg_fr',
                  icao_code: 'LFPG',
                  iata_country_code: 'FR',
                  iata_code: 'CDG',
                  iata_city_code: 'PAR',
                  city_name: 'Paris',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'Paris',
                    longitude: null,
                    latitude: null,
                    id: 'cit_par_fr',
                    icao_code: null,
                    iata_country_code: 'FR',
                    iata_code: 'PAR',
                    iata_city_code: 'PAR',
                    city_name: null
                  },
                  airports: null
                },
                operating_carrier_flight_number: null,
                operating_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                marketing_carrier_flight_number: '0315',
                marketing_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                id: 'ost_0000AAUJyoJTdkMdQszSEq',
                duration: 'PT1H20M',
                distance: null,
                destination_terminal: '5',
                destination: {
                  type: 'airport',
                  time_zone: 'Europe/London',
                  name: 'Heathrow Airport',
                  longitude: -0.458118,
                  latitude: 51.470311,
                  id: 'arp_lhr_gb',
                  icao_code: 'EGLL',
                  iata_country_code: 'GB',
                  iata_code: 'LHR',
                  iata_city_code: 'LON',
                  city_name: 'London',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'London',
                    longitude: null,
                    latitude: null,
                    id: 'cit_lon_gb',
                    icao_code: null,
                    iata_country_code: 'GB',
                    iata_code: 'LON',
                    iata_city_code: 'LON',
                    city_name: null
                  },
                  airports: null
                },
                departing_at: '2021-09-09T14:10:00',
                arriving_at: '2021-09-09T14:30:00',
                aircraft: {
                  name: 'Airbus A320',
                  id: 'arc_00009VMF8AgpV5sdO0xXAr',
                  iata_code: '320'
                }
              }
            ],
            origin_type: 'airport',
            origin: {
              type: 'airport',
              time_zone: 'Europe/Paris',
              name: 'Paris Charles de Gaulle Airport',
              longitude: 2.548962,
              latitude: 49.011244,
              id: 'arp_cdg_fr',
              icao_code: 'LFPG',
              iata_country_code: 'FR',
              iata_code: 'CDG',
              iata_city_code: 'PAR',
              city_name: 'Paris',
              city: {
                type: 'city',
                time_zone: null,
                name: 'Paris',
                longitude: null,
                latitude: null,
                id: 'cit_par_fr',
                icao_code: null,
                iata_country_code: 'FR',
                iata_code: 'PAR',
                iata_city_code: 'PAR',
                city_name: null
              },
              airports: null
            },
            id: 'ose_0000AAUJyo6MQVs8mCqynJ',
            fare_brand_name: 'Economy Select',
            duration: 'PT1H20M',
            destination_type: 'airport',
            destination: {
              type: 'airport',
              time_zone: 'Europe/London',
              name: 'Heathrow Airport',
              longitude: -0.458118,
              latitude: 51.470311,
              id: 'arp_lhr_gb',
              icao_code: 'EGLL',
              iata_country_code: 'GB',
              iata_code: 'LHR',
              iata_city_code: 'LON',
              city_name: 'London',
              city: {
                type: 'city',
                time_zone: null,
                name: 'London',
                longitude: null,
                latitude: null,
                id: 'cit_lon_gb',
                icao_code: null,
                iata_country_code: 'GB',
                iata_code: 'LON',
                iata_city_code: 'LON',
                city_name: null
              },
              airports: null
            },
            conditions: {
              change_before_departure: {
                penalty_currency: 'GBP',
                penalty_amount: '0.00',
                allowed: true
              }
            }
          }
        ],
        payment_requirements: {
          requires_instant_payment: false,
          price_guarantee_expires_at: null,
          payment_required_by: '2021-08-22T23:59:59Z'
        },
        passengers: [{ type: 'adult', id: 'pas_0000AAUJyZopWtWyTmXmWg' }],
        passenger_identity_documents_required: false,
        owner: {
          name: 'British Airways',
          id: 'arl_00009VME7DBKeMags5CliQ',
          iata_code: 'BA'
        },
        live_mode: false,
        id: 'off_0000AAUJyoLxUWLhYa9R6o',
        expires_at: '2021-08-19T16:38:58.384000Z',
        created_at: '2021-08-19T16:09:00.699068Z',
        conditions: {
          refund_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '25.00',
            allowed: true
          },
          change_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '0.00',
            allowed: true
          }
        },
        base_currency: 'GBP',
        base_amount: '75.00',
        allowed_passenger_identity_document_types: []
      },
      {
        updated_at: '2021-08-19T16:09:00.699068Z',
        total_emissions_kg: '22',
        total_currency: 'GBP',
        total_amount: '112.20',
        tax_currency: 'GBP',
        tax_amount: '27.20',
        slices: [
          {
            segments: [
              {
                passengers: [
                  {
                    passenger_id: 'pas_0000AAUJyZopWtWyTmXmWg',
                    fare_basis_code: 'NV2HO',
                    cabin_class_marketing_name: 'Euro Traveller',
                    cabin_class: 'economy',
                    baggages: [{ type: 'checked', quantity: 1 }]
                  }
                ],
                origin_terminal: '2A',
                origin: {
                  type: 'airport',
                  time_zone: 'Europe/Paris',
                  name: 'Paris Charles de Gaulle Airport',
                  longitude: 2.548962,
                  latitude: 49.011244,
                  id: 'arp_cdg_fr',
                  icao_code: 'LFPG',
                  iata_country_code: 'FR',
                  iata_code: 'CDG',
                  iata_city_code: 'PAR',
                  city_name: 'Paris',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'Paris',
                    longitude: null,
                    latitude: null,
                    id: 'cit_par_fr',
                    icao_code: null,
                    iata_country_code: 'FR',
                    iata_code: 'PAR',
                    iata_city_code: 'PAR',
                    city_name: null
                  },
                  airports: null
                },
                operating_carrier_flight_number: null,
                operating_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                marketing_carrier_flight_number: '0303',
                marketing_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                id: 'ost_0000AAUJyoJTdkMdQszSEt',
                duration: 'PT1H20M',
                distance: null,
                destination_terminal: '5',
                destination: {
                  type: 'airport',
                  time_zone: 'Europe/London',
                  name: 'Heathrow Airport',
                  longitude: -0.458118,
                  latitude: 51.470311,
                  id: 'arp_lhr_gb',
                  icao_code: 'EGLL',
                  iata_country_code: 'GB',
                  iata_code: 'LHR',
                  iata_city_code: 'LON',
                  city_name: 'London',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'London',
                    longitude: null,
                    latitude: null,
                    id: 'cit_lon_gb',
                    icao_code: null,
                    iata_country_code: 'GB',
                    iata_code: 'LON',
                    iata_city_code: 'LON',
                    city_name: null
                  },
                  airports: null
                },
                departing_at: '2021-09-09T08:55:00',
                arriving_at: '2021-09-09T09:15:00',
                aircraft: {
                  name: 'Airbus A319',
                  id: 'arc_00009VMF8AgpV5sdO0xXAn',
                  iata_code: '319'
                }
              }
            ],
            origin_type: 'airport',
            origin: {
              type: 'airport',
              time_zone: 'Europe/Paris',
              name: 'Paris Charles de Gaulle Airport',
              longitude: 2.548962,
              latitude: 49.011244,
              id: 'arp_cdg_fr',
              icao_code: 'LFPG',
              iata_country_code: 'FR',
              iata_code: 'CDG',
              iata_city_code: 'PAR',
              city_name: 'Paris',
              city: {
                type: 'city',
                time_zone: null,
                name: 'Paris',
                longitude: null,
                latitude: null,
                id: 'cit_par_fr',
                icao_code: null,
                iata_country_code: 'FR',
                iata_code: 'PAR',
                iata_city_code: 'PAR',
                city_name: null
              },
              airports: null
            },
            id: 'ose_0000AAUJyo6MQVs8mCqynL',
            fare_brand_name: 'Economy Plus',
            duration: 'PT1H20M',
            destination_type: 'airport',
            destination: {
              type: 'airport',
              time_zone: 'Europe/London',
              name: 'Heathrow Airport',
              longitude: -0.458118,
              latitude: 51.470311,
              id: 'arp_lhr_gb',
              icao_code: 'EGLL',
              iata_country_code: 'GB',
              iata_code: 'LHR',
              iata_city_code: 'LON',
              city_name: 'London',
              city: {
                type: 'city',
                time_zone: null,
                name: 'London',
                longitude: null,
                latitude: null,
                id: 'cit_lon_gb',
                icao_code: null,
                iata_country_code: 'GB',
                iata_code: 'LON',
                iata_city_code: 'LON',
                city_name: null
              },
              airports: null
            },
            conditions: {
              change_before_departure: {
                penalty_currency: 'GBP',
                penalty_amount: '0.00',
                allowed: true
              }
            }
          }
        ],
        payment_requirements: {
          requires_instant_payment: false,
          price_guarantee_expires_at: null,
          payment_required_by: '2021-08-22T23:59:59Z'
        },
        passengers: [{ type: 'adult', id: 'pas_0000AAUJyZopWtWyTmXmWg' }],
        passenger_identity_documents_required: false,
        owner: {
          name: 'British Airways',
          id: 'arl_00009VME7DBKeMags5CliQ',
          iata_code: 'BA'
        },
        live_mode: false,
        id: 'off_0000AAUJyoMJTCdHZgJiey',
        expires_at: '2021-08-19T16:38:58.384000Z',
        created_at: '2021-08-19T16:09:00.699068Z',
        conditions: {
          refund_before_departure: {
            penalty_currency: null,
            penalty_amount: null,
            allowed: false
          },
          change_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '0.00',
            allowed: true
          }
        },
        base_currency: 'GBP',
        base_amount: '85.00',
        allowed_passenger_identity_document_types: []
      },
      {
        updated_at: '2021-08-19T16:09:00.699068Z',
        total_emissions_kg: '22',
        total_currency: 'GBP',
        total_amount: '147.20',
        tax_currency: 'GBP',
        tax_amount: '27.20',
        slices: [
          {
            segments: [
              {
                passengers: [
                  {
                    passenger_id: 'pas_0000AAUJyZopWtWyTmXmWg',
                    fare_basis_code: 'NEV2OMR',
                    cabin_class_marketing_name: 'Euro Traveller',
                    cabin_class: 'economy',
                    baggages: [{ type: 'checked', quantity: 1 }]
                  }
                ],
                origin_terminal: '2A',
                origin: {
                  type: 'airport',
                  time_zone: 'Europe/Paris',
                  name: 'Paris Charles de Gaulle Airport',
                  longitude: 2.548962,
                  latitude: 49.011244,
                  id: 'arp_cdg_fr',
                  icao_code: 'LFPG',
                  iata_country_code: 'FR',
                  iata_code: 'CDG',
                  iata_city_code: 'PAR',
                  city_name: 'Paris',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'Paris',
                    longitude: null,
                    latitude: null,
                    id: 'cit_par_fr',
                    icao_code: null,
                    iata_country_code: 'FR',
                    iata_code: 'PAR',
                    iata_city_code: 'PAR',
                    city_name: null
                  },
                  airports: null
                },
                operating_carrier_flight_number: null,
                operating_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                marketing_carrier_flight_number: '0323',
                marketing_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                id: 'ost_0000AAUJyoJTdkMdQszSEw',
                duration: 'PT1H15M',
                distance: null,
                destination_terminal: '5',
                destination: {
                  type: 'airport',
                  time_zone: 'Europe/London',
                  name: 'Heathrow Airport',
                  longitude: -0.458118,
                  latitude: 51.470311,
                  id: 'arp_lhr_gb',
                  icao_code: 'EGLL',
                  iata_country_code: 'GB',
                  iata_code: 'LHR',
                  iata_city_code: 'LON',
                  city_name: 'London',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'London',
                    longitude: null,
                    latitude: null,
                    id: 'cit_lon_gb',
                    icao_code: null,
                    iata_country_code: 'GB',
                    iata_code: 'LON',
                    iata_city_code: 'LON',
                    city_name: null
                  },
                  airports: null
                },
                departing_at: '2021-09-09T18:05:00',
                arriving_at: '2021-09-09T18:20:00',
                aircraft: {
                  name: 'Airbus A319',
                  id: 'arc_00009VMF8AgpV5sdO0xXAn',
                  iata_code: '319'
                }
              }
            ],
            origin_type: 'airport',
            origin: {
              type: 'airport',
              time_zone: 'Europe/Paris',
              name: 'Paris Charles de Gaulle Airport',
              longitude: 2.548962,
              latitude: 49.011244,
              id: 'arp_cdg_fr',
              icao_code: 'LFPG',
              iata_country_code: 'FR',
              iata_code: 'CDG',
              iata_city_code: 'PAR',
              city_name: 'Paris',
              city: {
                type: 'city',
                time_zone: null,
                name: 'Paris',
                longitude: null,
                latitude: null,
                id: 'cit_par_fr',
                icao_code: null,
                iata_country_code: 'FR',
                iata_code: 'PAR',
                iata_city_code: 'PAR',
                city_name: null
              },
              airports: null
            },
            id: 'ose_0000AAUJyo6MQVs8mCqynK',
            fare_brand_name: 'Economy Select',
            duration: 'PT1H15M',
            destination_type: 'airport',
            destination: {
              type: 'airport',
              time_zone: 'Europe/London',
              name: 'Heathrow Airport',
              longitude: -0.458118,
              latitude: 51.470311,
              id: 'arp_lhr_gb',
              icao_code: 'EGLL',
              iata_country_code: 'GB',
              iata_code: 'LHR',
              iata_city_code: 'LON',
              city_name: 'London',
              city: {
                type: 'city',
                time_zone: null,
                name: 'London',
                longitude: null,
                latitude: null,
                id: 'cit_lon_gb',
                icao_code: null,
                iata_country_code: 'GB',
                iata_code: 'LON',
                iata_city_code: 'LON',
                city_name: null
              },
              airports: null
            },
            conditions: {
              change_before_departure: {
                penalty_currency: 'GBP',
                penalty_amount: '0.00',
                allowed: true
              }
            }
          }
        ],
        payment_requirements: {
          requires_instant_payment: false,
          price_guarantee_expires_at: null,
          payment_required_by: '2021-08-22T23:59:59Z'
        },
        passengers: [{ type: 'adult', id: 'pas_0000AAUJyZopWtWyTmXmWg' }],
        passenger_identity_documents_required: false,
        owner: {
          name: 'British Airways',
          id: 'arl_00009VME7DBKeMags5CliQ',
          iata_code: 'BA'
        },
        live_mode: false,
        id: 'off_0000AAUJyoMJTCdHZgJiez',
        expires_at: '2021-08-19T16:38:58.384000Z',
        created_at: '2021-08-19T16:09:00.699068Z',
        conditions: {
          refund_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '25.00',
            allowed: true
          },
          change_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '0.00',
            allowed: true
          }
        },
        base_currency: 'GBP',
        base_amount: '120.00',
        allowed_passenger_identity_document_types: []
      },
      {
        updated_at: '2021-08-19T16:09:00.699068Z',
        total_emissions_kg: '22',
        total_currency: 'GBP',
        total_amount: '157.20',
        tax_currency: 'GBP',
        tax_amount: '27.20',
        slices: [
          {
            segments: [
              {
                passengers: [
                  {
                    passenger_id: 'pas_0000AAUJyZopWtWyTmXmWg',
                    fare_basis_code: 'NV2OMR',
                    cabin_class_marketing_name: 'Euro Traveller',
                    cabin_class: 'economy',
                    baggages: [{ type: 'checked', quantity: 1 }]
                  }
                ],
                origin_terminal: '2A',
                origin: {
                  type: 'airport',
                  time_zone: 'Europe/Paris',
                  name: 'Paris Charles de Gaulle Airport',
                  longitude: 2.548962,
                  latitude: 49.011244,
                  id: 'arp_cdg_fr',
                  icao_code: 'LFPG',
                  iata_country_code: 'FR',
                  iata_code: 'CDG',
                  iata_city_code: 'PAR',
                  city_name: 'Paris',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'Paris',
                    longitude: null,
                    latitude: null,
                    id: 'cit_par_fr',
                    icao_code: null,
                    iata_country_code: 'FR',
                    iata_code: 'PAR',
                    iata_city_code: 'PAR',
                    city_name: null
                  },
                  airports: null
                },
                operating_carrier_flight_number: null,
                operating_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                marketing_carrier_flight_number: '0303',
                marketing_carrier: {
                  name: 'British Airways',
                  id: 'arl_00009VME7DBKeMags5CliQ',
                  iata_code: 'BA'
                },
                id: 'ost_0000AAUJyoJpcQeDRz9jnD',
                duration: 'PT1H20M',
                distance: null,
                destination_terminal: '5',
                destination: {
                  type: 'airport',
                  time_zone: 'Europe/London',
                  name: 'Heathrow Airport',
                  longitude: -0.458118,
                  latitude: 51.470311,
                  id: 'arp_lhr_gb',
                  icao_code: 'EGLL',
                  iata_country_code: 'GB',
                  iata_code: 'LHR',
                  iata_city_code: 'LON',
                  city_name: 'London',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'London',
                    longitude: null,
                    latitude: null,
                    id: 'cit_lon_gb',
                    icao_code: null,
                    iata_country_code: 'GB',
                    iata_code: 'LON',
                    iata_city_code: 'LON',
                    city_name: null
                  },
                  airports: null
                },
                departing_at: '2021-09-09T08:55:00',
                arriving_at: '2021-09-09T09:15:00',
                aircraft: {
                  name: 'Airbus A319',
                  id: 'arc_00009VMF8AgpV5sdO0xXAn',
                  iata_code: '319'
                }
              }
            ],
            origin_type: 'airport',
            origin: {
              type: 'airport',
              time_zone: 'Europe/Paris',
              name: 'Paris Charles de Gaulle Airport',
              longitude: 2.548962,
              latitude: 49.011244,
              id: 'arp_cdg_fr',
              icao_code: 'LFPG',
              iata_country_code: 'FR',
              iata_code: 'CDG',
              iata_city_code: 'PAR',
              city_name: 'Paris',
              city: {
                type: 'city',
                time_zone: null,
                name: 'Paris',
                longitude: null,
                latitude: null,
                id: 'cit_par_fr',
                icao_code: null,
                iata_country_code: 'FR',
                iata_code: 'PAR',
                iata_city_code: 'PAR',
                city_name: null
              },
              airports: null
            },
            id: 'ose_0000AAUJyo6MQVs8mCqynL',
            fare_brand_name: 'Economy Select',
            duration: 'PT1H20M',
            destination_type: 'airport',
            destination: {
              type: 'airport',
              time_zone: 'Europe/London',
              name: 'Heathrow Airport',
              longitude: -0.458118,
              latitude: 51.470311,
              id: 'arp_lhr_gb',
              icao_code: 'EGLL',
              iata_country_code: 'GB',
              iata_code: 'LHR',
              iata_city_code: 'LON',
              city_name: 'London',
              city: {
                type: 'city',
                time_zone: null,
                name: 'London',
                longitude: null,
                latitude: null,
                id: 'cit_lon_gb',
                icao_code: null,
                iata_country_code: 'GB',
                iata_code: 'LON',
                iata_city_code: 'LON',
                city_name: null
              },
              airports: null
            },
            conditions: {
              change_before_departure: {
                penalty_currency: 'GBP',
                penalty_amount: '0.00',
                allowed: true
              }
            }
          }
        ],
        payment_requirements: {
          requires_instant_payment: false,
          price_guarantee_expires_at: null,
          payment_required_by: '2021-08-22T23:59:59Z'
        },
        passengers: [{ type: 'adult', id: 'pas_0000AAUJyZopWtWyTmXmWg' }],
        passenger_identity_documents_required: false,
        owner: {
          name: 'British Airways',
          id: 'arl_00009VME7DBKeMags5CliQ',
          iata_code: 'BA'
        },
        live_mode: false,
        id: 'off_0000AAUJyoMfRsuramU0DC',
        expires_at: '2021-08-19T16:38:58.384000Z',
        created_at: '2021-08-19T16:09:00.699068Z',
        conditions: {
          refund_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '25.00',
            allowed: true
          },
          change_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '0.00',
            allowed: true
          }
        },
        base_currency: 'GBP',
        base_amount: '130.00',
        allowed_passenger_identity_document_types: []
      },
      {
        updated_at: '2021-08-19T16:08:58.179589Z',
        total_emissions_kg: '14',
        total_currency: 'GBP',
        total_amount: '392.67',
        tax_currency: 'GBP',
        tax_amount: '59.90',
        slices: [
          {
            segments: [
              {
                passengers: [
                  {
                    passenger_id: 'pas_0000AAUJyZopWtWyTmXmWg',
                    fare_basis_code: 'Y20LGTN2',
                    cabin_class_marketing_name: 'Economy',
                    cabin_class: 'economy',
                    baggages: [{ type: 'checked', quantity: 1 }]
                  }
                ],
                origin_terminal: '2',
                origin: {
                  type: 'airport',
                  time_zone: 'Europe/Paris',
                  name: 'Paris Charles de Gaulle Airport',
                  longitude: 2.548962,
                  latitude: 49.011244,
                  id: 'arp_cdg_fr',
                  icao_code: 'LFPG',
                  iata_country_code: 'FR',
                  iata_code: 'CDG',
                  iata_city_code: 'PAR',
                  city_name: 'Paris',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'Paris',
                    longitude: null,
                    latitude: null,
                    id: 'cit_par_fr',
                    icao_code: null,
                    iata_country_code: 'FR',
                    iata_code: 'PAR',
                    iata_city_code: 'PAR',
                    city_name: null
                  },
                  airports: null
                },
                operating_carrier_flight_number: '6727',
                operating_carrier: {
                  name: 'Duffel Airways',
                  id: 'arl_00009VME7D6ivUu8dn35WK',
                  iata_code: 'ZZ'
                },
                marketing_carrier_flight_number: '6727',
                marketing_carrier: {
                  name: 'Duffel Airways',
                  id: 'arl_00009VME7D6ivUu8dn35WK',
                  iata_code: 'ZZ'
                },
                id: 'seg_0000AAUJyZxgzwcUvGgrL6',
                duration: 'PT1H6M',
                distance: '397.16592517608984',
                destination_terminal: '7',
                destination: {
                  type: 'airport',
                  time_zone: 'Europe/London',
                  name: 'Heathrow Airport',
                  longitude: -0.458118,
                  latitude: 51.470311,
                  id: 'arp_lhr_gb',
                  icao_code: 'EGLL',
                  iata_country_code: 'GB',
                  iata_code: 'LHR',
                  iata_city_code: 'LON',
                  city_name: 'London',
                  city: {
                    type: 'city',
                    time_zone: null,
                    name: 'London',
                    longitude: null,
                    latitude: null,
                    id: 'cit_lon_gb',
                    icao_code: null,
                    iata_country_code: 'GB',
                    iata_code: 'LON',
                    iata_city_code: 'LON',
                    city_name: null
                  },
                  airports: null
                },
                departing_at: '2021-09-09T23:00:00',
                arriving_at: '2021-09-10T00:06:00',
                aircraft: {
                  name: 'Boeing 777-300',
                  id: 'arc_00009VMF8AhXSSRnQDI6HE',
                  iata_code: '773'
                }
              }
            ],
            origin_type: 'airport',
            origin: {
              type: 'airport',
              time_zone: 'Europe/Paris',
              name: 'Paris Charles de Gaulle Airport',
              longitude: 2.548962,
              latitude: 49.011244,
              id: 'arp_cdg_fr',
              icao_code: 'LFPG',
              iata_country_code: 'FR',
              iata_code: 'CDG',
              iata_city_code: 'PAR',
              city_name: 'Paris',
              city: {
                type: 'city',
                time_zone: null,
                name: 'Paris',
                longitude: null,
                latitude: null,
                id: 'cit_par_fr',
                icao_code: null,
                iata_country_code: 'FR',
                iata_code: 'PAR',
                iata_city_code: 'PAR',
                city_name: null
              },
              airports: null
            },
            id: 'sli_0000AAUJyZxgzwcUvGgrL7',
            fare_brand_name: 'Basic',
            duration: 'PT1H6M',
            destination_type: 'airport',
            destination: {
              type: 'airport',
              time_zone: 'Europe/London',
              name: 'Heathrow Airport',
              longitude: -0.458118,
              latitude: 51.470311,
              id: 'arp_lhr_gb',
              icao_code: 'EGLL',
              iata_country_code: 'GB',
              iata_code: 'LHR',
              iata_city_code: 'LON',
              city_name: 'London',
              city: {
                type: 'city',
                time_zone: null,
                name: 'London',
                longitude: null,
                latitude: null,
                id: 'cit_lon_gb',
                icao_code: null,
                iata_country_code: 'GB',
                iata_code: 'LON',
                iata_city_code: 'LON',
                city_name: null
              },
              airports: null
            },
            conditions: {
              change_before_departure: {
                penalty_currency: 'GBP',
                penalty_amount: '70.00',
                allowed: true
              }
            }
          }
        ],
        payment_requirements: {
          requires_instant_payment: false,
          price_guarantee_expires_at: '2021-08-21T16:08:58Z',
          payment_required_by: '2021-08-22T16:08:58Z'
        },
        passengers: [{ type: 'adult', id: 'pas_0000AAUJyZopWtWyTmXmWg' }],
        passenger_identity_documents_required: false,
        owner: {
          name: 'Duffel Airways',
          id: 'arl_00009VME7D6ivUu8dn35WK',
          iata_code: 'ZZ'
        },
        live_mode: false,
        id: 'off_0000AAUJyZxgzwcUvGgrL8',
        expires_at: '2021-08-19T16:23:58.178317Z',
        created_at: '2021-08-19T16:08:58.179589Z',
        conditions: {
          refund_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '70.00',
            allowed: true
          },
          change_before_departure: {
            penalty_currency: 'GBP',
            penalty_amount: '70.00',
            allowed: true
          }
        },
        base_currency: 'GBP',
        base_amount: '332.77',
        allowed_passenger_identity_document_types: []
      }
    ],
    live_mode: false,
    id: 'orq_0000AAUJyZopWtWyTmXmWe',
    created_at: '2021-08-19T16:08:58.154825Z',
    cabin_class: 'economy'
  }
};
