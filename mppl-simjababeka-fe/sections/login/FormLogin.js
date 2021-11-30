import InputText from "@/components/input/Input";
import Buttons from "@/components/input/Button";

function FormLogin({ handleSubmit, handleInput }) {
	return (
		<>
			<InputText
				label="E-mail"
				name="email"
				fullWidth
				margin="normal"
				onChange={handleInput}
			/>
			<InputText
				label="Password"
				name="password"
				type="password"
				margin="normal"
				fullWidth
				onChange={handleInput}
			/>
			<Buttons
				fullWidth
				text="Login"
				variant="contained"
				color="primary"
				sx={{ marginTop: 2, marginBottom: 4 }}
				onClick={handleSubmit}
			/>
		</>
	);
}

export default FormLogin;
