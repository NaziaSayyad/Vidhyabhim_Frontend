import { useState } from "react";
import { Calendar } from "@mantine/dates";
import { Card, Title, Group, ActionIcon, rem } from "@mantine/core";
import { IconCalendar, IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";

function CustomCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Card shadow="md" radius="md" p="lg" style={{ maxWidth: 320, margin: "auto" }}>
      {/* Header */}
      <Group position="apart" mb="md">
        <Title order={4} style={{ display: "flex", alignItems: "center", gap: rem(5) }}>
          <IconCalendar size={16} /> Calendar
        </Title>
        <ActionIcon variant="subtle" color="gray" size="sm">
          <IconX size={14} />
        </ActionIcon>
      </Group>

      {/* Calendar Component */}
      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
        size="sm"
        fullWidth
        nextIcon={<IconChevronRight size={16} />}
        previousIcon={<IconChevronLeft size={16} />}
        styles={{
          day: {
            fontWeight: 500,
            borderRadius: rem(6),
            "&[data-selected]": {
              backgroundColor: "#007bff",
              color: "white",
            },
            "&:hover": { backgroundColor: "#f1f3f5" },
          },
          cell: { padding: "4px" },
          weekday: { fontWeight: 600, fontSize: rem(13) },
          header: { fontSize: rem(15), fontWeight: "bold" },
        }}
      />
    </Card>
  );
}

export default CustomCalendar;
