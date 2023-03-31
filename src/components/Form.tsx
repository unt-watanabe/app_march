import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
import { TextareaAutosize } from '@mui/base';

export const Form = () => {
  const [selectedDate, setSelectedDate] = useState<any>(Date.now());
  const [form1, setForm1] = useState<string>('■今日行ったこと');
  const [form2, setForm2] = useState<string>('■明日やること');
  const [form3, setForm3] = useState<string>('■出退勤時間');
  const [form4, setForm4] = useState<string>('■自宅作業（作業した場合のみ）');
  const [form5, setForm5] = useState<string>('■その他');

  const clickCopyBtn = () => {
    setLocalStrage();
    copyClipboard();
  };

  const setLocalStrage = () => {
    if (form1) localStorage.setItem('form1', form1);
    if (form2) localStorage.setItem('form2', form2);
    if (form3) localStorage.setItem('form3', form3);
    if (form4) localStorage.setItem('form4', form4);
    if (form5) localStorage.setItem('form5', form5);
  };

  const copyClipboard = () => {
    (async () => {
      const date = new Date(selectedDate);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const dayOfWeeks = ['日', '月', '火', '水', '木', '金', '土'];
      const dayOfWeek = dayOfWeeks[date.getDay()];
      const res1 = await localStorage.getItem('form1');
      const res2 = await localStorage.getItem('form2');
      const res3 = await localStorage.getItem('form3');
      const res4 = await localStorage.getItem('form4');
      const res5 = await localStorage.getItem('form5');
      navigator.clipboard.writeText(`${year}年${month}月${day}日（${dayOfWeek}）

${res1}

${res2}

${res3}

${res4}

${res5}`);
    })();
  };

  const clearFormAndLocalStorage = () => {
    setForm1('');
    setForm2('');
    setForm3('');
    setForm4('');
    setForm5('');
  };

  useEffect(() => {
    (async () => {
      const res1 = await localStorage.getItem('form1');
      const res2 = await localStorage.getItem('form2');
      const res3 = await localStorage.getItem('form3');
      const res4 = await localStorage.getItem('form4');
      const res5 = await localStorage.getItem('form5');
      if (res1) setForm1(res1);
      if (res2) setForm2(res2);
      if (res3) setForm3(res3);
      if (res4) setForm4(res4);
      if (res5) setForm5(res5);
    })();
  }, []);

  return (
    <Container sx={{ padding: '1rem' }}>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={dayjs(selectedDate)}
            onChange={(e) => {
              setSelectedDate(e);
            }}
          />
        </LocalizationProvider>
      </Box>
      <Box sx={{ marginTop: '1rem' }}>
        <TextareaAutosize
          minRows={6}
          style={{ width: '100%' }}
          value={form1}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setForm1(e.target.value);
          }}
        />
      </Box>
      <Box>
        <TextareaAutosize
          minRows={6}
          style={{ width: '100%' }}
          value={form2}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setForm2(e.target.value);
          }}
        />
      </Box>
      <Box>
        <TextareaAutosize
          minRows={6}
          style={{ width: '100%' }}
          value={form3}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setForm3(e.target.value);
          }}
        />
      </Box>
      <Box>
        <TextareaAutosize
          minRows={6}
          style={{ width: '100%' }}
          value={form4}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setForm4(e.target.value);
          }}
        />
      </Box>
      <Box>
        <TextareaAutosize
          minRows={6}
          style={{ width: '100%' }}
          value={form5}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setForm5(e.target.value);
          }}
        />
      </Box>
      <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <Button variant="contained" onClick={clickCopyBtn} sx={{ fontSize: '1.2rem', padding: '1rem', width: '40%' }}>
          COPY
        </Button>
        <Button variant="contained" onClick={clearFormAndLocalStorage} sx={{ marginLeft: '1rem', fontSize: '1.2rem', padding: '1rem', width: '40%' }}>
          CLEAR
        </Button>
      </Box>
    </Container>
  );
};
