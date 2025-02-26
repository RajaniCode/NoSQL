require 'mongo'

client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'muse')
arts = client[:arts, :capped => true, :size => 1024]
arts.create
artists.capped? #=> Returns true. // Optional