import "./Pagination.css"

const Pagination = (props) => {
  const { current, onChange } = props;

  return (
    <div id="pagination">
      <button
        data-testid="prev-page"
        disabled={current === 1}
        onClick={() => onChange(current - 1)}
      >
        Prev
      </button>
      <button>{current}</button>
      <button onClick={() => onChange(current + 1)}>Next</button>
    </div>
  );
};
export default Pagination;
