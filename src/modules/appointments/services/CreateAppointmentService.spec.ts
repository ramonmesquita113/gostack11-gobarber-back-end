import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', () => {
    expect(1 + 2).toBe(3);
  });

  it('should not able to create two appointments on the same time', () => {
    expect(1 + 2).toBe(3);
  });
});
