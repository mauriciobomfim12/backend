interface Transaction {
  type: number;
  date: string;
  product: string;
  value: number;
  seller: string;
}

export async function parseFileContent(fileContent: string): Promise<Transaction[]> {
  const lines = fileContent.split('\n');

  const transactions: Transaction[] = lines.map( (line) => {
    const type = parseInt(line.substring(0, 1));
    const date = line.substring(1, 26);
    const product = line.substring(26, 56).trim();
    const value = parseInt(line.substring(56, 66));
    const seller = line.substring(66, 86).trim();

    return { type, date, product, value, seller };
  });

  return await transactions;
}

export async function normalizeTransactions(transactions: Transaction[]): Promise<Transaction[]> {
  let dados = transactions.map((transactions) => {
    const normalizedValue = transactions.value / 100;

    return {
      type: transactions.type,
      date: transactions.date,
      product: transactions.product,
      value: normalizedValue,
      seller: transactions.seller,
    };
  });

  return await dados
}
