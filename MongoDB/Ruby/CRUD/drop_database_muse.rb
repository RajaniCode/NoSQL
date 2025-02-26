require 'mongo'

client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'muse')
client.database.drop
