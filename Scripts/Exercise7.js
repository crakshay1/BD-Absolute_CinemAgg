db.movies_complete.find({}, {_id: 0, title:1})
db.movies_complete.find({year: {$gt:2000, $lt:2019}}, {_id: 0, title:1, year:1})
db.movies_complete.find({title: "Spider-Man"}, {_id: 0, title:1, summary:1})
db.movies_complete.find({title: "Gladiator"}, {_id: 0, "director.first_name":1, "director.last_name": 1})
db.movies_complete.find({$and: [{"actors.last_name": "Dunst"}, {"actors.first_name": "Kirsten"}]}, {_id: 0, title: 1})
db.movies_complete.find({summary:{$ne: null}}).count()
db.movies_complete.find({$or: [{"actors.last_name": /^Cl/}, {"actors.first_name": /^Cl/}]}, {_id: 0, title: 1})
db.movies_complete.find({$nor: [{genre: "Comedy"}, {genre: "Drama"}]})
db.movies_complete.find({}, {_id: 0, title:1, "actors.first_name": 1, "actors.last_name":1})
db.movies_complete.find({$and: [{"actors.last_name": "Eastwood"}, {"actors.first_name": "Clint"}], 
                         $or: [{"director.last_name": {$ne:"Eastwood"}}, {"director.first_name": {$ne:"Clint"}}]}, 
                         {_id: 0, title:1})
