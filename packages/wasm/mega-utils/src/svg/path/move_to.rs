use super::{line_to::LineTo, position::Position, Command};

struct MoveTo {
    position: Position,
    arguments: (f32, f32, Option<LineTo>),
}

impl Command for MoveTo {
    fn to_data_command(&self) -> String {
        todo!()
    }
}
