defmodule ZcashExplorerWeb.LayoutView do
  use ZcashExplorerWeb, :view

  def bg_class(assigns) do
    case assigns[:zcash_network] do
      "testnet" ->
        "bg-violet-100 dark:bg-violet-950"

      _ ->
        "bg-zcash-light dark:bg-zcash-dark"
    end
  end
end
