require 'mongo'

client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'music')
arts = client[:arts]
arts.drop
