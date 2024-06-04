require 'mongo'

client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'muse')
arts = client[:arts]
arts.with(:read => { :mode => :primary_preferred }).find.to_a
# https://docs.mongodb.org/ecosystem/tutorial/ruby-driver-tutorial/
# w=Integer|String { :write => { :w => Integer|String }} 
arts.with({ :write => { :w => Integer|String }}).insert_one({ :name => 'Depeche Mode' })

