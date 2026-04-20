import { createContext, useContext, useState } from 'react';
const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarProduto(produto) {
    // retorna o produto ou undefind
    const produtoEncontrado = carrinho.find(produtoCarrinho => produtoCarrinho.id === produto.id); // produtoCarrinho é o que está no carrinho e produto é o que eu recebida função
    
    if (produtoEncontrado) {
      const novoCarrinho = carrinho.map(item => {
        if (item.id === produto.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        }
        return item; // Importante: mantém os outros itens no novo array!
      });

      setCarrinho(novoCarrinho);
    } else {
      // Aqui é um produto totalmente novo no carrinho
      setCarrinho(prev => [...prev, { ...produto, quantidade: 1 }]);
    }
  }

  function removerProduto(idProduto) {
    const produtoNoCarrinho = carrinho.find(item => item.id === idProduto);

    if (produtoNoCarrinho.quantidade > 1) {
      // 1. Aqui você usa o seu .map para diminuir a quantidade
      const novoCarrinho = carrinho.map(item => 
        item.id === idProduto ? { ...item, quantidade: item.quantidade - 1 } : item
      );
      setCarrinho(novoCarrinho);
    } else {
      const novoCarrinho = carrinho.filter((produto) => produto.id !== idProduto);
      setCarrinho(novoCarrinho);
    }
  }

  function deletarProduto(idProduto) {
    const novoCarrinho = carrinho.filter((produto) => produto.id !== idProduto);
    setCarrinho(novoCarrinho);
  }

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarProduto, removerProduto, deletarProduto}}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = () => useContext(CarrinhoContext);