# Absolute CinemAgg

**Discovering MongoDB in a Docker Container with Simple Queries**  
*Cloud Computing & Big Data — Université Paris-Saclay*

-----------------------------------------------------
This project is a hands-on introduction to NoSQL databases through MongoDB, deployed inside a Docker container. It revolves around a cinema dataset (films and artists) that is loaded into MongoDB and explored with simple queries and aggregation pipelines.

The goal is to get familiar with the document model, data import, and the MongoDB query and aggregation language, in an isolated and reproducible environment thanks to Docker.

-------
## Report
You can find the description of the work and the queries in the [BIGDATA-Report-Akshay.pdf](https://github.com/crakshay1/BD-Absolute_CinemAgg/blob/main/BIGDATA-Report-Akshay.pdf).

## Tech stack
* MongoDB
* Docker
* MongoDB GUI client (3T Studio) for browsing and importing the data

## Structure

```
Scripts/                      # Scripts used to set up and query the database
BIGDATA-Report-Akshay.pdf     # Project report
artistes_mongo.json           # Artists collection (MongoDB format)
films.json                    # Films collection
films_3T_Studio.json          # Films dataset formatted for 3T Studio
movies-JSON-refs.json         # Movies dataset using references between documents
movies-mongochef.json         # Movies dataset formatted for MongoChef
```
