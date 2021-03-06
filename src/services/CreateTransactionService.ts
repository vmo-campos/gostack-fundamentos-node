import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(data: Omit<Transaction, 'id'>): Transaction {
    const transaction = this.transactionsRepository.create(data);

    return transaction;
  }
}

export default CreateTransactionService;
