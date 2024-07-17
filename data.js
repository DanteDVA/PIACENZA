var APP_DATA = {
  "scenes": [
    {
      "id": "0-soggiorno",
      "name": "SOGGIORNO",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.0020819036803043645,
        "pitch": 0.17335846182318448,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 0.8012235654995195,
          "pitch": 0.06495386848312279,
          "rotation": 0,
          "target": "2-disimpegno"
        },
        {
          "yaw": 3.12829241699204,
          "pitch": 0.1682013361969119,
          "rotation": 0,
          "target": "1-cottura-pranzo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cottura-pranzo",
      "name": "COTTURA-PRANZO",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4786334539761228,
          "pitch": 0.08378603224712045,
          "rotation": 0,
          "target": "0-soggiorno"
        },
        {
          "yaw": 0.9364068387222346,
          "pitch": 0.06363022135478857,
          "rotation": 0,
          "target": "2-disimpegno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-disimpegno",
      "name": "DISIMPEGNO",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.15157924953273394,
          "pitch": 0.1520242575641504,
          "rotation": 0,
          "target": "0-soggiorno"
        },
        {
          "yaw": 1.2309194678170616,
          "pitch": 0.2833057480265744,
          "rotation": 0,
          "target": "5-bagno"
        },
        {
          "yaw": 2.330275267809462,
          "pitch": 0.29180335332634755,
          "rotation": 0,
          "target": "3-camera"
        },
        {
          "yaw": -2.2774114013099798,
          "pitch": 0.2376554943544953,
          "rotation": 0,
          "target": "4-cameretta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-camera",
      "name": "CAMERA",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6004359472794807,
          "pitch": 0.22300556227040147,
          "rotation": 0,
          "target": "2-disimpegno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cameretta",
      "name": "CAMERETTA",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3211438652375147,
          "pitch": 0.17474845475886092,
          "rotation": 0,
          "target": "2-disimpegno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bagno",
      "name": "BAGNO",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2070612221073702,
          "pitch": 0.10742170690489417,
          "rotation": 0,
          "target": "2-disimpegno"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
