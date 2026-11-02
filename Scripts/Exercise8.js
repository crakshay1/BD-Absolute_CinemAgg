db.movies.find({}, {_id:0, title:1})

db.movies.find({year: {$gt:2000, $lt: 2019}}, {_id: 0, title:1})

db.movies.find({title:"Spider-Man"}, {_id: 0, title:1, summary:1})

db.movies.find({title:"Gladiator"}, {_id:0, title:1, director:1})

db.movies.aggregate([
  {$lookup:{from:"artists", localField:"actors._id", foreignField:"_id", as:"acts"}},
  {$match:{acts:{$elemMatch:{first_name:"Kirsten", last_name:"Dunst"}}}},
  {$project:{_id:0, title:1}}
])

db.movies.find({summary:{$ne: null}}).count()
db.movies.find({}).count() - db.movies.find({summary:{$eq: null}}).count()

db.movies.aggregate([
  {$lookup:{from:"artists", localField:"actors._id", foreignField:"_id", as:"acts"}},
  {$match:{acts:{$elemMatch:{$or:[{first_name:/^Cl/}, {last_name:/^Cl/}]}}}},
  {$project:{_id:0, title:1}}
])
db.movies.find({$nor:[{genre:"Comedy"}, {genre: "Drama"}]}, {_id:0, title:1})

db.movies.aggregate([
  {$lookup:{from:"artists", localField:"actors._id", foreignField:"_id", as:"acts"}},
  {$project:{_id:0, title:1, "acts.first_name":1, "acts.last_name": 1}}
])

db.movies.aggregate([
  {$lookup: {from: "artists", localField: "actors._id", foreignField: "_id", as: "acts"}},
  {$match: {$and: [
    {acts: {$elemMatch: {first_name: "Clint", last_name: "Eastwood"}}},
    {$or: [{"director.last_name": {$ne: "Eastwood"}}, {"director.first_name": {$ne: "Clint"}}]}
  ]}},
  {$project: {_id: 0, title: 1}}
])