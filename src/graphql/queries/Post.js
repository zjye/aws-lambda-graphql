import {
	GraphQLList,
	GraphQLString,
	GraphQLNonNull,
} from 'graphql';

// import the Post type we created
import PostType from '../types/Post';

// import the Post resolver we created
import PostResolver from '../resolvers/Post';


export default {

	index() {
		return {
			type: new GraphQLList(PostType),
			description: 'This will return all the posts we find in the given subreddit.',
			args: {
				subreddit: {
					type: GraphQLString,
					description: 'Please enter subreddit name',
				}
			},
			resolve(parent, args, context, info) {
				return PostResolver.index(args);
			}
		}
	},

};

