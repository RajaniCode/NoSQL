require 'mongo'

client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'music')

documents = client[:artists].find(:name => 'Flying Lotus').skip(10).limit(10)
documents.each do |document|
  #=> Yields a BSON::Document.
end
