require 'mongo'

client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'music')
artists = client[:artists]

result = artists.find(:name => 'Bjork').delete_one
result.n #=> Returns 1.

result = artists.delete_one(:name => 'Bjork')
result.n #=> Returns 1.

result = artists.find(:label => 'Mute').delete_many
result.n #=> Returns the number deleted.

result = artists.delete_many(:label => 'Mute')
result.n #=> Returns the number deleted.
