use super::{position::Position, Command};

pub struct LineTo {
    position: Position,
}

impl Command for LineTo {
    fn to_data_command(&self) -> String {
        todo!()
    }
}
