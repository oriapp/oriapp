<?php

class ඩ
{
  public bool $👌;
  public bool $😡;
  public int $💀;

  public function __construct(bool $😈, int $💀 = 0, int $👨)
  {
    if($😈) $this->👌 = true;
    $this->💀 = $💀;
    $this->😊 = $👨;

    if($this->👌) $this->🔪();
  }

  public function 🔪()
  {
    while($this->😊)
    {
      $this->💀++; $this->😊--;
      echo "ඩ 🔪 😊 [{$this->💀}] 😇\n";
    }
  }
}

new ඩ(1, 0, 6);

?>
