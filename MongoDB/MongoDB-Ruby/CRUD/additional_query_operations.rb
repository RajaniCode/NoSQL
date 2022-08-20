require 'mongo'

client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'music')

client[:artists].find(:name => 'Flying Lotus').count

client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'music')

client[:artists].find.distinct(:name)
