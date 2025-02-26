require 'mongo'

client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'music')
artists = client[:artists]

result = artists.find(:name => 'Goldie').update_one("$inc" => { :plays => 1 })
result.n #=> Returns 1.

result = artists.update_one({ :name => 'Goldie' }, { "$inc" => { :plays => 1 }})
result.n #=> Returns 1.

result = artists.find(:label => 'Hospital').update_many("$inc" => { :plays => 1 })
result.n #=> Returns the number of documents that were updated.

result = artists.update_many({ :label => 'Hospital' }, { "$inc" => { :plays => 1 }})
result.n #=> Returns the number of documents that were updated.

result = artists.find(:name => 'Aphex Twin').replace_one(:name => 'Richard James')
result.n #=> Returns 1.

result = artists.replace_one({ :name => 'Aphex Twin' }, { :name => 'Richard James' })
result.n #=> Returns 1.
