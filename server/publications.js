Meteor.publish('posts', function($title){
	if($title){
		return Posts.find({title:$title});
	}else{
		return Posts.find();
	}
});