import React, { Component } from "react";
import TableHeader from "./common/TableHeader";
import Like from "./common/Like";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title"
    },
    {
      path: "genre.name",
      label: "Genre"
    },
    {
      path: "numberInStock",
      label: "Stock"
    },
    {
      path: "dailyRentalRate",
      label: "Rate"
    },
    { key: "like" },
    { key: "delete" }
  ];
  render() {
    return (
      <div>
        <table className="table">
          <TableHeader
            columns={this.columns}
            sortColumn={this.props.sortColumn}
            onSort={this.props.onSort}
          />
          <tbody>
            {this.props.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.props.onLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-danger btn sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MoviesTable;
