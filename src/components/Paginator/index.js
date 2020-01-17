import React from "react";
import "./paginator.css";
import Button from "../Button";
const Paginator = ({ page, pages, total, onChangePage }) => {
  page = parseInt(page);
  return (
    <div className="paginator">
      <span>Total de registros: {total}</span>
      <br />
      <span>
        Página: {page} de {pages} página{pages > 1 && `s`}
      </span>
      {page > 1 && (
        <Button
          onClick={() => {
            onChangePage(parseInt(page) - 1);
          }}
        >
          Página {page - 1}
        </Button>
      )}

      {page < pages && (
        <Button
          onClick={() => {
            onChangePage(parseInt(page) + 1);
          }}
        >
          Página {page + 1}
        </Button>
      )}
    </div>
  );
};

export default Paginator;
