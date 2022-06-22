
from http import client
import pymongo

import certifi

con_str="mongodb+srv://Astridg:Laylag16@cluster0.sa0jd.mongodb.net/?retryWrites=true&w=majority"

client: pymongo.MongoClient(con_str,tlsCAFile=certifi.where())

db= client.get_database("Clothing")