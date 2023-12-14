var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "Front",
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
        "yaw": -0.0023559273264517344,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.7569657059631041,
          "pitch": 0.07767436697299601,
          "rotation": 0,
          "target": "3-right"
        },
        {
          "yaw": -0.7070117287848419,
          "pitch": 0.06707570864690027,
          "rotation": 0,
          "target": "1-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-left",
      "name": "Left",
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
          "yaw": 0.6823109180727371,
          "pitch": 0.009776257948246325,
          "rotation": 0,
          "target": "0-front"
        },
        {
          "yaw": -0.806146275118806,
          "pitch": 0.14930962939026315,
          "rotation": 0,
          "target": "2-rear"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-rear",
      "name": "Rear",
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
          "yaw": -0.634048940382332,
          "pitch": -0.010148030359882654,
          "rotation": 0,
          "target": "3-right"
        },
        {
          "yaw": 0.7217664279721632,
          "pitch": 0.09076024601002253,
          "rotation": 0,
          "target": "1-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-right",
      "name": "Right",
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
          "yaw": -0.980056237140527,
          "pitch": 0.04732319202124913,
          "rotation": 0,
          "target": "0-front"
        },
        {
          "yaw": 0.5609424705461539,
          "pitch": 0.09041683032674186,
          "rotation": 0,
          "target": "2-rear"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
