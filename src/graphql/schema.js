import {
	GraphQLObjectType,
	GraphQLSchema,
} from 'graphql';
import PostQuery from './queries/Post';



// lets define our root query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'This is the default root query provided by our application',
	fields: {
		posts: PostQuery.index(),
	},
});


export default new GraphQLSchema({
	query: RootQuery,
});

