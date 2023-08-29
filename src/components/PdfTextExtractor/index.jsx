import React, { useState, useEffect } from 'react';

import * as pdfjs from 'pdfjs-dist';
import PropTypes from 'prop-types';

export const PdfTextExtractor = ({
  pdfUrl = '/src/assets/o_pequeno_principe.pdf',
}) => {
  const [text, setText] = useState(['']);
  const [numPages, setNumPages] = useState(1000);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const loadingTask = pdfjs.getDocument(pdfUrl);

    loadingTask.promise
      .then((pdfDocument) => {
        const numPages = pdfDocument.numPages;
        const textPromises = [];

        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          textPromises.push(
            pdfDocument.getPage(pageNum).then((page) => {
              return page.getTextContent().then((textContent) => {
                let text = '';
                textContent.items.forEach((item) => {
                  text += item.str + ' ';
                });
                return text;
              });
            })
          );
        }

        return Promise.all(textPromises);
      })
      .then((pageTexts) => {
        // `pageTexts` é um array contendo o texto de cada página do PDF
        setText(pageTexts);
        setNumPages(pageTexts.length);
      })
      .catch((error) => {
        console.error('Erro ao carregar o PDF:', error);
      });
  }, [pdfUrl]);

  const incrementCount = () => {
    setCurrentPage(currentPage + 1);
  };

  // Verifica se a string é vazia
  // useEffect(() => {
  //   if (!!text[currentPage].trim() === '') console.log('ssss');
  // }, [numPages, currentPage]);

  return currentPage < numPages ? (
    <div>
      <h2>Página atual: {currentPage + 1}</h2>
      <p>{text[currentPage]}</p>
      <button onClick={incrementCount}>próxima</button>
    </div>
  ) : (
    <h1>ACABOU</h1>
  );
};

PdfTextExtractor.propTypes = {
  pdfUrl: PropTypes.string,
};
