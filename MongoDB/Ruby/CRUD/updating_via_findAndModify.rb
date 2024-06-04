require 'mongo'

client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'music')
artists = client[:artists]

artists.find(:name => 'Jose James').find_one_and_delete #=> Returns the document.

doc = artists.find(:name => 'Jose James').find_one_and_replace(:name => 'Jose')
doc #=> Return the document before the update.

doc = artists.find_one_and_replace({ :name => 'Jose James' }, { :name => 'Jose' })
doc #=> Return the document before the update.

doc = artists.find(:name => 'Jose James').
  find_one_and_replace({ :name => 'Jose' }, :return_document => :after)
doc #=> Return the document after the update.

doc = artists.find(:name => 'Jose James').
  find_one_and_update('$set' => { :name => 'Jose' })
doc #=> Return the document before the update.

doc = artists.find_one_and_update({ :name => 'Jose James' }, { '$set' => { :name => 'Jose' }})
doc #=> Return the document before the update.

doc = artists.find(:name => 'Jose James').
  find_one_and_replace({ '$set' => { :name => 'Jose' }}, :return_document => :after)
doc #=> Return the document after the update.

doc = artists.find_one_and_replace(
  { :name => 'Jose James' },
  { '$set' => { :name => 'Jose' }},
  :return_document => :after
)
doc #=> Return the document after the update.
