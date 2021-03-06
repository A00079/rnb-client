import { Grid } from "@material-ui/core";
import { Text } from "../../../../components";

const Heading = () => {
	return (    
		<div>
            <Grid container className="mb-5">
            <Text weight={600}
                        variant="primary"
                        size="lg"
                        >Casual T-Shirt - 254 Products</Text>
            </Grid>
			<Grid container>
				<Grid item xs={12} md={2}>
					<Grid container justify="space-between">
						<Grid item>
							<Text weight={600}>Filters</Text>
						</Grid>
						<Grid item>
							<Text weight={600} variant="danger">
								Clear All
							</Text>
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={10}>
					<Grid container justify="center">
						{/* for filter chips to be added in future */}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Heading;
