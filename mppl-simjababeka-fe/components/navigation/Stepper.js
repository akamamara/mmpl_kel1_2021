import { Box } from "@mui/material";
import { Stepper, Step, StepLabel, StepContent, Button } from "@mui/material";

function StepperSection({
	activeStep,
	steps,
	stepperFunction,
	orientation = "vertical",
}) {
	return (
		<Stepper activeStep={activeStep} orientation={orientation}>
			{steps.map((step, index) => (
				<Step key={step.label}>
					<StepLabel>{step.label}</StepLabel>
					<StepContent>
						{step.content}
						<Box sx={{ mb: 2 }}>
							<div>
								<Button
									variant="contained"
									onClick={stepperFunction.handleNext}
									sx={{ mt: 1, mr: 1 }}
								>
									{index === steps.length - 1 ? "Selesai" : "Selanjutnya"}
								</Button>
								<Button
									disabled={index === 0}
									onClick={stepperFunction.handleBack}
									sx={{ mt: 1, mr: 1 }}
								>
									Kembali
								</Button>
							</div>
						</Box>
					</StepContent>
				</Step>
			))}
		</Stepper>
	);
}

export default StepperSection;
