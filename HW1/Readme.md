# Homework 1 
This is going to be your first homework for the Internet Engineering course.  We try to cover following capabilities in this homework: 
* Ability to running a webserver in Node 
* Ability to use an NPM package in your code 
* Ability to deploy your code to one PAAS platform 
* Follow best practices that you learned in the class 
* Following the software spect that is given to you
 

We have tried to design the  homework in way that it is in direction of your final project. 
# Vision
In age of Covid-19 We want to write an application to help people in this situation. In your first HW you are witing an application to report if someone is diagnosed with Covid-19 and it collects the information to show how many users are detected in specific area. 
# General Description 
In this homework you have to run a webserver in NodeJS that performs some GIS functionality. The GIS information is given to you as a JSON file. you have to load the file in memory once the server is booting. Then each request that comes to server you have to process the data in return appropriate response. 

In server initial input file you will be receiving number of polygons with it's GPS coordinates (lat, long). The basic functionality is to be given a GPS coordinate and tell which polygons the point is inside them.  
## APIs 
You have to write number of HTTP API endpoints that can be called by any Http client. 

* A GET (/gis/testpoint) endpoint that receives a pair of parameters (lat, long) and returns a JSON structure which has a member called polygons and it contains the name of the polygons that the point is inside them 
* A PUT (/gis/addpolygon) endpoint that we can add a new polygon to server for subsequent get calls. 

The response format of the GET call is as follows: 
‍‍‍‍‍
```JSON
{
    polygons : [
        'استان تهران' ,
         'شهر تهران' , 
         'منطقه ۳'
    ]
}
```



The format of the PUT endpoint input format is as follows: 

```JSON
{
    "type": "Feature",
    "properties": {
    "name": "تهران"
    },
    "geometry": {
    "type": "Polygon",
    "coordinates": [
        [
        [
            53.514404296875,
            34.59704151614417
        ],
        [
            51.416015625,
            34.854382885097905
        ],
        [
            51.6851806640625,
            33.82023008524739
        ],
        [
            53.514404296875,
            34.59704151614417
        ]
        ]
    ]
    }
}
```

## Input file file format

The file that server initially loads the data has following format : (An array of the input parameter for PUT call)


```{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "name": "سمنان"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              52.2894287109375,
              35.387930399448095
            ],
            [
              52.20977783203124,
              35.40808023595146
            ],
            [
              52.12188720703125,
              35.475209977972064
            ],
            [
              51.943359375,
              35.556808973844596
            ],
            [
              51.862335205078125,
              35.576916524038616
            ],
            [
              51.8115234375,
              35.380092992092145
            ],
            [
              51.82388305664062,
              35.290468565908775
            ],
            [
              51.998291015625,
              35.122155106436956
            ],
            [
              52.35397338867187,
              35.1614594458557
            ],
            [
              52.47482299804687,
              35.28710571680812
            ],
            [
              52.2894287109375,
              35.387930399448095
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "name": "Test"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              53.514404296875,
              34.59704151614417
            ],
            [
              51.416015625,
              34.854382885097905
            ],
            [
              51.6851806640625,
              33.82023008524739
            ],
            [
              53.514404296875,
              34.59704151614417
            ]
          ]
        ]
      }
    }
  ]
}

```

You can generate sample files  from here: 

[GEOJSON](http://geojson.io)

This is one of the standard formats in GIS 

### Geo Spatial Libraries

Feel free to use any ready to use library to perform geo spatial functionalities. 

## Deployment

You have to deploy your application into heroku platform and in addition to your source code you have to provide a live link to your application see Heroku documentation on how to deply a NodeJs application on it. 
See [Heroku](https://heroku.com)

## Logging 
You have to properly use a logging library and properly put log commands in your application.

# How to Deliver
You have to had over your source code over github. Also you have to have a live URL on heroku for your application. 

You have to have a short Readme.md on the root of your project on report of what you have done and result of your load test. 

