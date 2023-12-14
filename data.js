var APP_DATA = {
  "scenes": [
    {
      "id": "0-111_1---panorama",
      "name": "111_1 - Panorama",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.049436915681496885,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.5081104562720036,
          "pitch": 0.0839781285842296,
          "rotation": 0,
          "target": "2-111_3---panorama"
        },
        {
          "yaw": -0.497160519280472,
          "pitch": 0.07508636310555161,
          "rotation": 0,
          "target": "1-111_2---panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-111_2---panorama",
      "name": "111_2 - Panorama",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2849061868883389,
          "pitch": 0.1292320576619126,
          "rotation": 0,
          "target": "0-111_1---panorama"
        },
        {
          "yaw": 0.42574667552152157,
          "pitch": 0.07157901319734705,
          "rotation": 0,
          "target": "2-111_3---panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-111_3---panorama",
      "name": "111_3 - Panorama",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5097125276613461,
          "pitch": 0.0836451795547255,
          "rotation": 0,
          "target": "0-111_1---panorama"
        },
        {
          "yaw": -0.6823106308457749,
          "pitch": 0.0695456154716183,
          "rotation": 0,
          "target": "1-111_2---panorama"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Sample",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
