var APP_DATA = {
  "scenes": [
    {
      "id": "0-unit01_groundfloor_hall",
      "name": "Unit01_Groundfloor_Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.2928593365299754,
        "pitch": -0.02890149635316952,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.19215736410524897,
          "pitch": 0.03705057527062472,
          "rotation": 4.71238898038469,
          "target": "1-unit01_groundfloor_hallway"
        },
        {
          "yaw": -0.3732271230950879,
          "pitch": 0.5851779084950337,
          "rotation": 0,
          "target": "3-unit01_mezzanine_entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-unit01_groundfloor_hallway",
      "name": "Unit01_Groundfloor_Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.3245410382246128,
        "pitch": 0.04190716971209696,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7169619533427642,
          "pitch": 0.475937986923185,
          "rotation": 0,
          "target": "2-unit01_groundfloor_kitchen"
        },
        {
          "yaw": -2.2563314346304058,
          "pitch": 0.27642515240103194,
          "rotation": 1.5707963267948966,
          "target": "0-unit01_groundfloor_hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-unit01_groundfloor_kitchen",
      "name": "Unit01_Groundfloor_Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.5594597796929897,
        "pitch": 0.056279756299389305,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.564161022988081,
          "pitch": 0.005904661524340327,
          "rotation": 7.853981633974483,
          "target": "1-unit01_groundfloor_hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-unit01_mezzanine_entry",
      "name": "Unit01_Mezzanine_Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7744558368780226,
          "pitch": 0.6865731653545382,
          "rotation": 0,
          "target": "0-unit01_groundfloor_hall"
        },
        {
          "yaw": -1.0664191857431504,
          "pitch": 0.07418193902715942,
          "rotation": 4.71238898038469,
          "target": "4-unit01_mezzanine_living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-unit01_mezzanine_living",
      "name": "Unit01_Mezzanine_Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10267340927864765,
          "pitch": 0.43816480649806877,
          "rotation": 0,
          "target": "5-unit01_mezzanine_bedroom"
        },
        {
          "yaw": -1.5551055233094946,
          "pitch": 0.21506136297332645,
          "rotation": 10.995574287564278,
          "target": "3-unit01_mezzanine_entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-unit01_mezzanine_bedroom",
      "name": "Unit01_Mezzanine_Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.7809433292258987,
        "pitch": 0.06108257646244475,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5854130703550435,
          "pitch": 0.6789317727587765,
          "rotation": 0,
          "target": "4-unit01_mezzanine_living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "DosGuindais_Unit01",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
