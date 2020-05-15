interface IMailConfig {
  driver: 'ethereal' | 'ses'; // Amazon SES

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'contato@jsfelipearaujo.com',
      name: 'Jose da GoBarber',
    },
  },
} as IMailConfig;
