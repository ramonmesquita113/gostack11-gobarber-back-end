import FakeUserRepository from '@modules/users/repositories/fakes/FakeUserRepository';
import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
// import AppError from '@shared/errors/AppError';

describe('SendForgotPasswordEmail', () => {
  it('should be able to recover the password using the e-mail', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const fakeMailProvider = new FakeMailProvider();

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    const sendForgotPasswordEmailService = new SendForgotPasswordEmailService(
      fakeUserRepository,
      fakeMailProvider,
    );

    await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await sendForgotPasswordEmailService.execute({
      email: 'johndoe@example.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });
});
