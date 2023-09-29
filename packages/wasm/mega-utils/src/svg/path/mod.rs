mod close_path;
mod cubic_bezier_curve;
mod elliptical_arc_curve;
mod line_to;
mod move_to;
mod position;
mod quadratic_bezier_curve;

pub trait Command {
    fn to_data_command(&self) -> String;
}

pub struct Data {
    paths: Vec<Box<dyn Command>>,
}
