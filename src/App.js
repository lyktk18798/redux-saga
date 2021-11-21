import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { fetchDatas } from './actions';
import './App.css';

function App({ getAllDatas }) {
  const datas = useSelector(state => state.title.datas);
  const isLoading = useSelector(state => state.title.isLoading);

  useEffect(() => {
    console.log(43243)
    getAllDatas();
  }, [])

  return (
    <>
      {isLoading && <p>Please wait</p>}
      {!datas.length && <p>Not record found</p>}
      <table class="table table-striped">
        <thead>
          <th>Title</th>
          <th>Artist</th>
          <th>Label</th>
          <th>Year</th>
        </thead>
        <tbody>
          {datas.map((item, i) => {
            return (
              <tr>
                <td>{item.title}</td>
                <td>{item.artist}</td>
                <td>{item.label}</td>
                <td>{item.year}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getAllDatas: () => dispatch(fetchDatas()),
  }
}

const withConnect = connect(
  null,
  mapDispatchToProps
)
export default compose(withConnect)(App);
