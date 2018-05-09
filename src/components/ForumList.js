import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Forum from './Forum';
import article from '../json/article.json';

class ForumList extends Component {
    state = { article: [] };

    componentWillMount() {
        // debugger;
        this.setState({ article });
        console.log(this.state);
    }

    renderForum() {
        return this.state.article.map(article =>
            <Forum key = {article.title} article = {article} />
        );
    }

    render() {
        // debugger;
        const { container } = styles;
        return (
            <ScrollView style = {container}>
                {this.renderForum()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default ForumList;