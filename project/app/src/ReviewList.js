import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class ReviewList extends Component {

  constructor(props) {
    super(props);
    this.state = {reviews: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('api/reviews')
      .then(response => response.json())
      .then(data => this.setState({reviews: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/api/review/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedReviews = [...this.state.reviews].filter(i => i.id !== id);
      this.setState({reviews: updatedReviews});
    });
  }

  render() {
    const {reviews, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const reviewList = reviews.map(review => {
      const address = `${review.address || ''} ${review.city || ''} ${review.stateOrProvince || ''}`;
      return <tr key={review.id}>
        <td style={{whiteSpace: 'nowrap'}}>{review.name}</td>
        <td>{address}</td>
        <td>{review.events.map(event => {
          return <div key={review.id}>{new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
          }).format(new Date(event.date))}: {event.title}</div>
        })}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/reviews/" + review.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(review.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/reviews/new">Add Review</Button>
          </div>
          <h3>Customer Reviews</h3>
          <Table className="mt-4">
            <thead>
            <tr>
              <th width="20%">Item Name</th>
              <th width="20%">Cost</th>
              <th>Review</th>
              <th width="10%">Actions</th>
            </tr>
            </thead>
            <tbody>
            {reviewList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default ReviewList;