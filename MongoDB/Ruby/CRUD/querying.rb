require 'mongo'

client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'music')

client[:artists].find(:name => 'Flying Lotus').each do |document|
  #=> Yields a BSON::Document.
end
