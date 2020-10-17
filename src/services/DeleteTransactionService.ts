import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';

import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    // Verifica se a transação existe para ser deletada
    const transaction = await transactionsRepository.findOne(id);

    // Senão existe, mostre uma msg de error
    if (!transaction) {
      throw new AppError('Transaction is not exists for delete');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
