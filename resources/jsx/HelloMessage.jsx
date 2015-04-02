var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <div className="jumbotron">
                <h1>Hello, {this.props.name}!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos molestias, laborum consequuntur repudiandae voluptatem ipsam quidem laudantium cumque culpa libero, eligendi ducimus illo doloremque natus eveniet aut similique quos neque labore officia nihil inventore excepturi! Laudantium eum mollitia aperiam earum dolorem ea, blanditiis deleniti, itaque optio adipisci, dolores! Esse harum, dolorem? Reiciendis voluptates deleniti magnam asperiores et pariatur incidunt iure corporis dolorem obcaecati ipsam, nam quos soluta possimus assumenda recusandae neque hic repudiandae non aspernatur! Hic dolores, nobis sed laudantium, ducimus corporis odio odit autem expedita consequatur id modi, ullam excepturi sapiente praesentium maiores nulla eos totam non optio impedit!</p>
            </div>
        );
    }
});
