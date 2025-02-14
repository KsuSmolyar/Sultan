import styles from "../appointmentSelect.module.css";

type AppointmentSelectProps = {
    appointments: { name: string, value: string }[]
    appointment: string[]
}
export const AppointmentSelect = ({ appointments, appointment }: AppointmentSelectProps) => {
    return (
        <select
            className={styles.appointment}
            defaultValue={appointment}
            name='appointment'
            id='appointment'
            multiple
        >
            {appointments.map((appointment, index) => {
                return (
                    <option key={index} value={appointment.value}>{appointment.name}</option>
                )
            })}
        </select>
    )
}
