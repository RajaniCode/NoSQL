require 'mongo'

client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'muse')
database = client.database

result = database.command(:ismaster => 1)
result.first #=> Returns the BSON::Document returned from the server.